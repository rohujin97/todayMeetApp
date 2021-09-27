// import { Sequelize } from 'sequelize';
const Sequelize = require('sequelize');

const sequelize = require('../config/database.js');
const {DataTypes} = require("sequelize");
const Photo = require('../models/photo');

// module.exports = (sequelize) => {
//
//    const User = sequelize.define('users', {
//       user_id:{
//          type: Sequelize.INTEGER,
//          autoIncrement: true,
//          allowNull: false,
//          primaryKey: true,
//       },
//       user_email: {
//          type: Sequelize.STRING(45),
//          allowNull: false,
//          primaryKey: false,
//       },
//       user_phone: {
//          type: Sequelize.STRING,
//          allowNull: false,
//       },
//       user_passwd: {
//          type: Sequelize.STRING(45),
//          allowNull: false,
//       },
//       bcard_id: {
//          type: Sequelize.INTEGER,
//          allowNull: true,
//       },
//       location_id: {
//          type: Sequelize.INTEGER,
//          allowNull: true,
//       },
//       user_name: {
//          type: Sequelize.STRING(50),
//          allowNull: false,
//          primaryKey: false,
//       },
//    },);
//    User.associate = models => {
//       User.belongsTo(models.Photo, { foreignKey: 'id' })
//    }
//    return User
// }
const User = sequelize.define('users', {
   user_id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
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
   user_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: false,
   },
});
User.associate = models => {
      User.belongsTo(models.Photo, { foreignKey: 'id' })
}
module.exports = User;
