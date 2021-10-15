import { Sequelize } from 'sequelize';

import sequelize from '../config/database.js';

const Chatting = sequelize.define('chatting', {
   chatting_id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   chatting_sid:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
   },
   chatting_rid:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
   },
   chatting_cont:{
    type: Sequelize.TEXT,
    autoIncrement: false,
    allowNull: false,
   },
   chatting_time:{
    type: Sequelize.DATE,
    autoIncrement: false,
    allowNull: false,
   },
   user_id:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
   },
   friends_id:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
   },
});

export default Chatting;