//import { Sequelize } from 'sequelize';
/*const Sequelize=require("sequelize")

const sequelize = require('../config/database.js');
//import sequelize from '../config/database.js';

const Photo = sequelize.define('photos', {
   url:{
    type: Sequelize.STRING(300),
    autoIncrement: false,
    allowNull: true,
 },
   comp:{
    type: Sequelize.STRING(50),
    autoIncrement: false,
    allowNull: true,
 },
});

module.exports = Photo;*/

  
const Sequelize = require('sequelize');

const sequelize = require('../config/database.js');

module.exports = class Photo extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      url: {
        type: Sequelize.STRING(300),
        autoIncrement: false,
        allowNull: true,
      },
      comp: {
        type: Sequelize.STRING(50),
        autoIncrement: false,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Photo',
      tableName: 'photos',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db){
    db.Photo.belongsTo(db.User, { foreignKey: 'UserId', targetKey: 'user_id' })
  }
}
module.exports = function (sequelize, DataTypes) {
   const Photo = sequelize.define('photos', {
     id: {
       type: Sequelize.INTEGER,
       autoIncrement: false,
       allowNull: false,
       primaryKey: true,
     },
    url:{
     type: Sequelize.STRING(300),
     autoIncrement: false,
     allowNull: true,
  },
    comp:{
     type: Sequelize.STRING(50),
     autoIncrement: false,
     allowNull: true,
  },
   }, {
     timestamps: false,
     underscored: true,
     modelName: 'Photo',
     tableName: 'photos',
     charset: 'utf8',
     collate: 'utf8_unicode_ci'
   });
   // Photo.associate = function(models) {
   //   models.Photo.belongsTo(models.User, { foreignKey: "id", targetKey: "user_id"})
   // }
   return Photo;
 }