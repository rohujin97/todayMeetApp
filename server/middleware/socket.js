const pool = require('../middleware/pool');
const messageHandler = require("../handlers/message.handler");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sequelize = require('../config/database')
const {DataTypes} = require('sequelize')
const User = require('../models/user.js')(sequelize, DataTypes);
// const User = require('../models').User;
// const Photo = require('../models').Photo;
// console.log(User, "user1")
const Bcard = require('../models/bcard.js');
const Friends = require('../models/friends.js');
const Photo = require('../models/photo')(sequelize, DataTypes);
const {Sequelize} = require("sequelize");

let currentUserId = 0;
const users = {};

function createUserAvatarUrl() {
    const rand1 = Math.round(Math.random() * 200 + 100);
    const rand2 = Math.round(Math.random() * 200 + 100);
    return `https://placeimg.com/${rand1}/${rand2}/any`;
}

function createUsersOnline() {
  console.log(users)
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
                case "server/hello":
                    console.log("Got hello event", action.data);
                  socket.emit("action", {type: "message", data: "Good day!"});
                  break;
              case "server/join": //로그인할때
              async function join() {
                try {
                  console.log("Got join event", action.data); //action.data는 이메일
                  User.hasOne(Photo, {foreignKey: 'id'}); // User의 user.id와 Photo의 id가 일치하면
                  Photo.belongsTo(User, {foreignKey: 'id', targetKey: 'user_id'});
                  User.findOne({
                    include: [{
                      model: Photo,
                      attributes: ['url']
                    }],
                      where: {
                        user_email: action.data
                      }
                  })
                    .then(dbUser => {
                        users[socket.id] = {
                          userName : dbUser.user_name,
                          userEmail : dbUser.user_email,
                          avatar : dbUser.photo.url
                        }
                      console.log(users)
                      socket.emit("action", {
                        type: "users_online",
                        data: createUsersOnline()
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