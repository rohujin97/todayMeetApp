const Sequelize = require('sequelize');

const sequelize = require('../config/database.js');

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

module.exports = Photo;