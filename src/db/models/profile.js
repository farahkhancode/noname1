'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    avatar: DataTypes.STRING,
    locationId: {
       type: DataTypes.INTEGER,
       allowNull: false
     },
     userId: {
        type: DataTypes.INTEGER,
        allowNull: false
     }
  }, {});
  Profile.associate = function(models) {
    Profile.hasOne(models.Location, {
         foreignKey: "locationId"
       });
    Profile.belongsTo(models.User, {
         foreignKey: "userId",
         onDelete: "CASCADE"
   });
 };
  return Profile;
};
