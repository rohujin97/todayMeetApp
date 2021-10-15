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
const Bcard = require('../models/bcard');
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
              console.log(users);
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
          break;
        }
          join()
        case "server/set":
            async function set(){
                try{
                    console.log("At setting");
                    Bcard.findOne({
                        attributes:['bcard_id','bcard_comp','bcard_lev','bcard_dep','bcard_addr','bcard_tel'],
                    })
                    .then(result=>{
                        setting[result.bcard_id]={
                            b_id:result.bcard_id,
                            comp:result.bcard_comp,
                            level:result.bcard_lev,
                            depart:result.bcard_dep,
                            addr:result.bcard_addr,
                            tel:result.bcard_tel,
                        }
                        const b_values=Object.values(setting);
                        const 
                    })
                }
                catch(e){
                    throw e;
                }
            }
            break;
        set()
        case "server/meeting_list":
            async function meetlist(){
              try{
                console.log("meeting_list here!!"); 
                console.log(users_id)
                Meeting.findOne({ // All 하면 안나옴..
                  attributes: ['meeting_id', 'meeting_cont', 'meeting_loc', 'meeting_time'],
                  where:{
                    user_id: users_id, // 일단 user_id==2인 회원의 미팅을 가져옴 -> 로그인한 user의 id 받아와야할듯
                  }
                })
                .then(result => {
                  meets[result.meeting_id] = {
                    m_id : result.meeting_id,
                    cont : result.meeting_cont,
                    loc : result.meeting_loc,
                    time : result.meeting_time,
                  }
                  const m_values =Object.values(meets);
                  const onlyWithCont = m_values.filter(m => m.cont !== undefined);
                  console.log(meets)
                  console.log(users_id)
                  socket.emit("action", {
                    type: "meeting_list",
                    data: onlyWithCont
                  })
                  console.log("meeting_list 보냈음!!"); 
                })
              } catch(e){
                throw e;
              }
            }
            meetlist()
      }
      
    })
    messageHandler.handleMessage(socket, users);
  })
}