const Sequelize = require('sequelize');

const sequelize = require('../config/database.js');

const Bcard = sequelize.define('bcard', {
   bcard_id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   bcard_comp:{
      type: Sequelize.STRING(45),
      autoIncrement: false,
      allowNull: false,
   },
   bcard_lev:{
    type: Sequelize.STRING(45),
    autoIncrement: false,
    allowNull: true,
   },
   bcard_dep:{
    type: Sequelize.STRING(45),
    autoIncrement: false,
    allowNull: true,
   },
   bcard_addr:{
    type: Sequelize.STRING(100),
    autoIncrement: false,
    allowNull: true,
   },
   bcard_tel:{
    type: Sequelize.STRING(12),
    autoIncrement: false,
    allowNull: true,
   },
   
});

module.exports = Bcard;