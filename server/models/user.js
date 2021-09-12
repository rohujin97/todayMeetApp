import { Sequelize } from 'sequelize';

import sequelize from '../config/database.js';

const User = sequelize.define('users', {
   user_email: {
      type: Sequelize.STRING(45),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
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