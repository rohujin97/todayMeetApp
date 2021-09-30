//import { Sequelize } from 'sequelize';
const Sequelize=require("sequelize")

const sequelize = require('../config/database.js');
//import sequelize from '../config/database.js';

const Friends = sequelize.define('friends', {
   friends_id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   friends_loc: {
      type: Sequelize.STRING(200),
      allowNull: true,
   },
   bcard_id:{
    type: Sequelize.INTEGER,
    allowNull: false,
   },
});

export default Friends;