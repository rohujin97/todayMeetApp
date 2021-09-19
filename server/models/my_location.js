//import { Sequelize } from 'sequelize';
const Sequelize=require("sequelize")

const sequelize = require('../config/database.js');
//import sequelize from '../config/database.js';

const MyLocation = sequelize.define('my_location', {
   content: {
      type: Sequelize.STRING(200),
      allowNull: false,
      primaryKey: false,
   },
   update: {
      type: Sequelize.DATE,
      allowNull: true,
      primaryKey: false,
   },
   type: {
      type: Sequelize.STRING(45),
      allowNull: true,
   },
   user_id:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
 },
});

export default MyLocation;