//import { Sequelize } from 'sequelize';
const Sequelize=require("sequelize")

const sequelize = require('../config/database.js');
//import sequelize from '../config/database.js';

const MeetingList = sequelize.define('meeting_lists', {
   meeting_id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   friends_id:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
 },
});

export default MeetingList;