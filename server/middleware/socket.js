const pool = require('../middleware/pool');
const messageHandler = require("../handlers/message.handler");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const Bcard = require('../models/bcard.js');
const Friends = require('../models/friends.js');
const Photo = require('../models/photo');
const {Sequelize} = require("sequelize");
// const Country = require('../models/ssafy_db.js');

let currentUserId = 0;
const users = {};

function createUserAvatarUrl() {
    const rand1 = Math.round(Math.random() * 200 + 100);
    const rand2 = Math.round(Math.random() * 200 + 100);
    return `https://placeimg.com/${rand1}/${rand2}/any`;
}
module.exports = (io) => {

    io.on('connection', socket =>  {
        console.log('a user connected')
        console.log(socket.id);
        users[socket.id] = { userId: currentUserId++ };
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
                        // User.findOne({ where : {
                        //     user_email: action.data,
                        // }}).then(dbUser => {
                        //     users[socket.id].userName = dbUser.user_name;
                        //     users[socket.id].userEmail = dbUser.user_email;
                        //     users[socket.id].avatar = createUserAvatarUrl();
                        //     const values = Object.values(users);
                        //     console.log(users)
                        //     console.log(values)
                        // })
                        User.findAll()
                            .then(dbUser => {
                                for (let i = 0; i < dbUser.length; i++){
                                    users[dbUser[i].user_id] = {
                                        userName : dbUser[i].user_name,
                                        userEmail : dbUser[i].user_email,
                                        avatar : null
                                    }
                                }
                            })
                        Photo.findAll()
                            .then(dbPhoto => {
                                for (let i = 0; i < dbPhoto.length; i++){
                                    users[dbPhoto[i].id].avatar = createUserAvatarUrl();
                                }
                                console.log(users)
                                const values = Object.values(users);
                                console.log(values, "Photo findAll values")
                                const onlyWithUsernames = values.filter(u => u.userEmail !== undefined);
                                socket.emit("action", {
                                    type: "users_friends",
                                    data: onlyWithUsernames
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