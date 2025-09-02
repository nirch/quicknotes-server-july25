"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {    
    // Step 1: Creating Users Table
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
    });

    // Step 2: Clear existing data from notes (before adding FK constraint)
    await queryInterface.bulkDelete('notes', {});

     // Step 3: Add foreign key column
    await queryInterface.addColumn('notes', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove in reverse order
    await queryInterface.removeColumn('notes', 'userId');
    await queryInterface.dropTable('users');
  },
};
