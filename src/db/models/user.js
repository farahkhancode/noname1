'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {

    email: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
         isEmail: { msg: "must be a valid email" }
       }
     },
     locationId: {
        type: DataTypes.INTEGER,
      },

     password: {
       type: DataTypes.STRING,
       allowNull: false
     }


  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Location, {
    foreignKey: "locationId",
  });
    // associations can be defined here
  };
  return User;
};
