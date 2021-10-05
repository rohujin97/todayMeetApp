module.exports = function (sequelize, DataTypes) {
   const UsersHasFriends = sequelize.define('users_has_friends', {
     users_user_id: {
       type: DataTypes.INTEGER,
       autoIncrement: false,
       allowNull: false,
       primaryKey: true,
     },
     friends_friends_id: {
       type: DataTypes.INTEGER,
       autoIncrement: false,
       allowNull: false,
       primaryKey: true,
     },
   }, {
     timestamps: false,
     underscored: true,
     modelName: 'UsersHasFriends',
     tableName: 'users_has_friends',
     charset: 'utf8',
     collate: 'utf8_unicode_ci'
   });
 
   return UsersHasFriends;
 }