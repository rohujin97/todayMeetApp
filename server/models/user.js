//import { Sequelize } from 'sequelize';
const Sequelize=require("sequelize")

const sequelize = require('../config/database.js');
//import sequelize from '../config/database.js';

const User = sequelize.define('users', {
   user_id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   user_name: {
      type: Sequelize.STRING(45),
      allowNull: false,
      primaryKey: false,
   },
   user_email: {
      type: Sequelize.STRING(45),
      allowNull: false,
      primaryKey: false,
   },
   user_phone: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   user_passwd: {
      type: Sequelize.STRING(45),
      allowNull: false,
   },
   
});

module.exports = User;