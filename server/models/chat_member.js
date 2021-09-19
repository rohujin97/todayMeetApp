//import { Sequelize } from 'sequelize';
const Sequelize=require("sequelize")

const sequelize = require('../config/database.js');
//import sequelize from '../config/database.js';

const ChatMember = sequelize.define('chat_member', {
   nickname:{
    type: Sequelize.STRING(50),
    autoIncrement: false,
    allowNull: true,
   },
   room_id:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: true,
   },
   socket_id:{
    type: Sequelize.STRING(50),
    autoIncrement: false,
    allowNull: true,
   },
   join_time:{
    type: Sequelize.DATE,
    autoIncrement: false,
    allowNull: true,
   },
});

export default ChatMember;