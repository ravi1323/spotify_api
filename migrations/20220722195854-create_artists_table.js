"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("artists", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      track_id: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("artists");
  },
};
