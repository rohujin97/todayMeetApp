const pool = require('../middleware/pool');
const messageHandler = require("../handlers/message.handler");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sequelize = require('../config/database')
const {DataTypes} = require('sequelize')
const User = require('../models/user.js')(sequelize, DataTypes);
const Photo = require('../models/photo')(sequelize, DataTypes);
const UsersHasFriends = require('../models/users_has_friends')(sequelize, DataTypes);
const Bcard = require('../models/bcard.js');
const Friends = require('../models/friends.js');
const {Sequelize} = require("sequelize");

let currentUserId = 0;
const users = {};

function createUserAvatarUrl() {
    const rand1 = Math.round(Math.random() * 200 + 100);
    const rand2 = Math.round(Math.random() * 200 + 100);
    return `https://placeimg.com/${rand1}/${rand2}/any`;
}

function createUsersOnline() {
  // console.log(users)
  const values = Object.values(users);
  console.log(values, "createUsersOnline function")
  const onlyWithUsernames = values.filter(u => u.userEmail !== undefined);
  return onlyWithUsernames;
}
module.exports = (io) => {

    io.on('connection', socket =>  {
        console.log('a user connected')
        console.log(socket.id);
        users[socket.id] = { userId: currentUserId++ };
        socket.on("disconnect", () => {
          delete users[socket.id];
          io.emit("action", { type: "users_online", data: createUsersOnline()});
        })
        socket.on("action", action => {
            switch(action.type){
              case "server/private_message":
                const conversationId = action.data.conversationId;
                const from = users[socket.id].userId;
                const usersValues = Object.values(users);
                const socketIds = Object.keys(users);
                console.log(users)
                for (let i = 0; i < usersValues.length; i++) {
                  if (usersValues[i].userId === conversationId) {
                    const socketId = socketIds[i];
                    io.sockets[socketId].emit("action", {
                      type: "private_message",
                      data: {
                        ...action.data,
                        conversationId: from
                      }
                    });
                    break;
                  }
                }
                break;
              case "server/join": //로그인할때
              async function join() {
                try {
                  console.log("Got join event", action.data); //action.data는 이메일
                  User.hasMany(UsersHasFriends, {foreignKey: 'friends_friends_id', targetKey: 'user_id'});
                  UsersHasFriends.belongsTo(User, {foreignKey: 'friends_friends_id'});
                  User.hasOne(Photo, {foreignKey: 'id'}); // User의 user.id와 Photo의 id가 일치하면
                  Photo.belongsTo(User, {foreignKey: 'id', targetKey: 'user_id'});
                  User.findOne({
                    where: {user_email : action.data}
                  }).then(userDB => {
                    users[socket.id] = {
                      userId : userDB.user_id,
                      userName : userDB.user_name,
                    }
                    socket.emit("action", {
                      type: "self_user",
                      data: users[socket.id]
                    })
                  });
                    User.findAll({
                      attributes: ['user_id', 'user_name', 'user_email'],
                      include: [
                        {
                          model: Photo,
                          attributes: ['id', 'url']
                        },
                        {
                          model: UsersHasFriends,
                          attributes: ['users_user_id', 'friends_friends_id'],
                          where: {
                            users_user_id: [Sequelize.literal(`SELECT user_id FROM users WHERE user_email = 'na'`)]
                          }
                        }],
                    })
                      .then(dbUser => { //users객체 socket.id에 친구리스트 객체 추가
                        const friends = {}; // user의 친구리스트 저장
                        for(let i = 0; i < dbUser.length; i++){
                          friends[i+1] = {
                            userId : dbUser[i].user_id,
                            userName : dbUser[i].user_name,
                            userEmail : dbUser[i].user_email,
                            avatar : dbUser[i].photo.url
                          }
                        }
                        const friends_values = Object.values(friends);
                        const onlyWithFriendsName = friends_values.filter(v => v.userEmail !== undefined);
                        socket.emit("action", {
                          type: "users_online",
                          data: onlyWithFriendsName
                        });
                      })
                } catch (e) {
                  throw e;
                }
              }
                join()
            }
        })
        messageHandler.handleMessage(socket, users);
    })
}