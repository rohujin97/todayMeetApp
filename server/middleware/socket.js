const pool= require('../middleware/pool');
const messageHandler= require("../handlers/message.handler");
const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');
const sequelize= require('../config/database')
const {DataTypes} = require('sequelize')
const User = require('../models/user.js')(sequelize, DataTypes);
const Photo = require('../models/photo')(sequelize, DataTypes);
const UsersHasFriends = require('../models/users_has_friends')(sequelize, DataTypes);
const {Sequelize} = require("sequelize");
const redis = require('redis');
// const client = redis.createClient({
//   host : "127.0.0.1",
//   port : 6379
// })
//
// client.on("ready", () => {
//   console.log("redis is ready");
// })

let currentUserId = 0;
const users = {};
const rooms = {};

function createUserAvatarUrl() {
  const rand1 =Math.round(Math.random() * 200 + 100);
  const rand2 =Math.round(Math.random() * 200 + 100);
  return `https://placeimg.com/${rand1}/${rand2}/any`;
}

function createUsersOnline() {
  // console.log(users)
  const values =Object.values(users);
  // console.log(values, "createUsersOnline function")
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
          const roomId = action.data.roomId;
          // const from = client.hget(socket.id, "userId");
          const from = users[socket.id].userId;
          const userValues =Object.values(users);
          const socketIds =Object.keys(users);
          console.log(users)

          for (let i = 0; i < userValues.length; i++){
            if (userValues[i].userId === conversationId) {
              const socketId = socketIds[i];
              io.to(socketId).emit("action", {
                type: "private_message",
                data: {
                  ...action.data,
                  conversationId: from
                }
              })
              break;
            }
          }

          break;
        case "server/join": //로그인할때
        async function join() {
          try {
            console.log("Got join event", action.data); //action.data는 이메일
            User.hasOne(Photo, {foreignKey: 'id'}); // User의 user.id와 Photo의 id가 일치하면
            Photo.belongsTo(User, {foreignKey: 'id', targetKey: 'user_id'});
            User.findOne({
              include: [
                {
                  model: Photo,
                  attributes: ['id', 'url']
                }
              ],
              where: {user_email : action.data}
            }).then(userDB => {
              // client.hset(socket.id, "userId", userDB.user_id);
              // client.hset(socket.id, "userName", userDB.user_name);
              // client.hset(socket.id, "avatar", userDB.photo.avatar);
              users[socket.id] = {
                userId : userDB.user_id,
                userName : userDB.user_name,
                avatar : userDB.photo.url
              }

              const values =Object.values(users);
              const onlyWithUsernames = values.filter(u => u.userName !== undefined);

              socket.emit("action", {
                type: "users_online",
                data: onlyWithUsernames
              })
              socket.emit("action", {
                type: "self_user",
                data: users[socket.id]
              })
            });
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