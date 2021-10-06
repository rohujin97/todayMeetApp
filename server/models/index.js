const Sequelize = require('sequelize');

const sequelize = require('../config/database.js');
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;