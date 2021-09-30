//import { Sequelize } from 'sequelize';
const Sequelize=require("sequelize")

const sequelize = require('../config/database.js');
//import sequelize from '../config/database.js';

const UsersHasFriends = sequelize.define('users_has_friends', {
   users_user_id:{
      type: Sequelize.INTEGER,
      autoIncrement: false,
      allowNull: false,
      primaryKey: true,
   },
   friends_friends_id:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
 },
});

module.exports = UsersHasFriends;