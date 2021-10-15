const Sequelize = require('sequelize');

const sequelize = require('../config/database.js');

const Friends = sequelize.define('friends', {
   friends_id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   friends_bid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: false,
   },
   friends_loc: {
      type: Sequelize.STRING(200),
      allowNull: true,
   },
   user_id:{
    type: Sequelize.INTEGER,
    allowNull: false,
   },
   bcard_id:{
    type: Sequelize.INTEGER,
    allowNull: false,
   },
});

module.exports = Friends;