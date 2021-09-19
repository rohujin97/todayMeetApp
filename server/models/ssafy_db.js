// import { Sequelize } from 'sequelize';
const Sequelize = require('sequelize');

const sequelize = require('../config/database.js');

const Country = sequelize.define('countries', {
   country_id:{
      type: Sequelize.STRING(2),
      allowNull: false,
      primaryKey: true,
   },
   country_name: {
      type: Sequelize.STRING(40),
      allowNull: true,
      primaryKey: false,
   },
   region_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
});

module.exports = Country;
// export default User;