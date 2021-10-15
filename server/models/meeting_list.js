import { Sequelize } from 'sequelize';

import sequelize from '../config/database.js';

const MeetingList = sequelize.define('meeting_list', {
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