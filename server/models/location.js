import { Sequelize } from 'sequelize';

import sequelize from '../config/database.js';

const Location = sequelize.define('location', {
   content:{
    type: Sequelize.STRING(200),
    autoIncrement: false,
    allowNull: true,
 },
   saved_at:{
    type: Sequelize.DATE,
    autoIncrement: false,
    allowNull: true,
 },
});

export default Location;