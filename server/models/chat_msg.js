import { Sequelize } from 'sequelize';

import sequelize from '../config/database.js';

const ChatMsg = sequelize.define('chat_msg', {
   room_id:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: true,
   },
   user_id:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: true,
   },
   content:{
    type: Sequelize.STRING(100),
    autoIncrement: false,
    allowNull: true,
   },
   chat_time:{
    type: Sequelize.DATE,
    autoIncrement: false,
    allowNull: true,
   },
});

export default ChatMsg;