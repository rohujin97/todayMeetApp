// const Sequelize = require('sequelize');

// // const sequelize = require('../config/database.js');
// const sequelize = require('../models').sequelize;
// const Photo = require('../models/photo');

// module.exports = class User extends Sequelize.Model {
//    static init(sequelize) {
//       return super.init({
//          user_id: {
//             type: Sequelize.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true,
//          },
//          user_email: {
//             type: Sequelize.STRING(45),
//             allowNull: false,
//             primaryKey: false,
//          },
//          user_phone: {
//             type: Sequelize.STRING,
//             allowNull: false,
//          },
//          user_passwd: {
//             type: Sequelize.STRING(45),
//             allowNull: false,
//          },
//          user_name: {
//             type: Sequelize.STRING(50),
//             allowNull: false,
//             primaryKey: false,
//          },
//       }, {
//          sequelize,
//          timestamps: false,
//          underscored: false,
//          modelName: 'User',
//          tableName: 'users',
//          paranoid: false,
//          charset: 'utf8',
//          collate: 'utf8_general_ci',
//       });
//    }
//    static associate(db) {
//       db.User.hasOne(db.Photo, { foreignKey: 'UserId', sourceKey: 'user_id' })
//    }
// }

// const User = sequelize.define('users', {
//    user_id:{
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//    },
//    user_email: {
//       type: Sequelize.STRING(45),
//       allowNull: false,
//       primaryKey: false,
//    },
//    user_phone: {
//       type: Sequelize.STRING,
//       allowNull: false,
//    },
//    user_passwd: {
//       type: Sequelize.STRING(45),
//       allowNull: false,
//    },
//    user_name: {
//       type: Sequelize.STRING(50),
//       allowNull: false,
//       primaryKey: false,
//    },
// });
// User.associate = models => {
//       User.belongsTo(models.Photo, { foreignKey: 'id' })
// }
// module.exports = User;

module.exports = function (sequelize, DataTypes) {
   const User = sequelize.define('users', {
      user_id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
      },
      user_email: {
         type: DataTypes.STRING(45),
         allowNull: false,
         primaryKey: false,
      },
      user_phone: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      user_passwd: {
         type: DataTypes.STRING(45),
         allowNull: false,
      },
      user_name: {
         type: DataTypes.STRING(50),
         allowNull: false,
         primaryKey: false,
      },
   }, {
      timestamps: false,
      underscored: true,
      modelName: 'User',
      tableName: 'users',
      charset: 'utf8',
      collate: 'utf8_unicode_ci'
   });
   // User.associate = function(models) {
   //    models.User.hasOne(models.Photo, { foreignKey: 'id', sourceKey: 'user_id'})
   // }
   return User;
}
