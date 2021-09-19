//import { Sequelize } from 'sequelize';
const Sequelize=require("sequelize")

const sequelize = require('../config/database.js');
//import sequelize from '../config/database.js';

const Meeting = sequelize.define('meetings', {
   meeting_id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   meeting_loc: {
      type: Sequelize.STRING(200),
      allowNull: true,
      primaryKey: false,
   },
   meeting_time: {
      type: Sequelize.DATE,
      allowNull: false,
      primaryKey: false,
   },
   meeting_cont: {
      type: Sequelize.STRING(45),
      allowNull: true,
   },
   user_id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
 },
});

export default Meeting;