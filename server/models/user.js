import { Sequelize } from 'sequelize';

import sequelize from '../config/database.js';

const User = sequelize.define('user', {
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
   bcard_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
   },
   location_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
   },
});

export default User;