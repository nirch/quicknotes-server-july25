"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("notes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(30),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 30],
        },
      },
      text: {
        type: Sequelize.STRING(500),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 500],
        },
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.dropTable('notes');
  },
};
