'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
     "Users",
     "locationId",
     {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
         model: "Locations",
         key: "id",
         as: "locationId"
       },
     }
   );
 },


  down: (queryInterface, Sequelize) => {
  return queryInterface.removeColumn("Users", "locationId");

  }
};
