'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createAt: {
        type: Sequelize.DATE
      },
     
      riderId: {
        type: Sequelize.INTEGER
      },
      driverId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.fn('NOW')
      },
     
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trips');
  }
};