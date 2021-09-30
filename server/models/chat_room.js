//import { Sequelize } from 'sequelize';
const Sequelize=require("sequelize")

const sequelize = require('../config/database.js');
//import sequelize from '../config/database.js';

const ChatRoom = sequelize.define('chat_rooms', {
   title:{
    type: Sequelize.STRING(50),
    autoIncrement: false,
    allowNull: false,
   },
   join_member_count:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: true,
   },
   created:{
    type: Sequelize.DATE,
    autoIncrement: false,
    allowNull: false,
   },
});

module.exports = ChatRoom;