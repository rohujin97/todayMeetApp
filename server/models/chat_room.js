import { Sequelize } from 'sequelize';

import sequelize from '../config/database.js';

const ChatRoom = sequelize.define('chat_room', {
   title:{
    type: Sequelize.STRING(50),
    autoIncrement: false,
    allowNull: false,
   },
   join_member_count:{
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: true,
   },
   created:{
    type: Sequelize.DATE,
    autoIncrement: false,
    allowNull: false,
   },
});

export default ChatRoom;