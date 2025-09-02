"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        email: "nirch@example.com",
        password:
          "$2a$10$LMHBKyRPeluDIqT8/3T3bO2Ac3Wwdlc9EyklbjRHonbbVIinp4Cyi",
        name: "Nir Channes",
      },
      {
        email: "johnd@example.com",
        password:
          "$2a$10$LMHBKyRPeluDIqT8/3T3bO2Ac3Wwdlc9EyklbjRHonbbVIinp4Cyi",
        name: "John Doe",
      },
    ]);


    await queryInterface.bulkInsert("notes", [
      {
        title: "Morning Ideas",
        text: "Woke up with a few thoughts about the project direction. Need to capture them before they fade away.",
        date: new Date(),
        userId: 1,
      },
      {
        title: "Book Reminder",
        text: "Pick up the library book on coding basics. It might be useful for the weekend study session.",
        date: new Date(),
        userId: 1,
      },
      {
        title: "Grocery List",
        text: "Buy milk, bread, apples, and rice. Check if we need pasta or cooking oil before leaving.",
        date: new Date(),
        userId: 2,
     },
      {
        title: "Travel Plan",
        text: "Look into short trips nearby. A 2-3 hour train ride with a weekend stay could be a fun experiment.",
        date: new Date(),
        userId: 1,
      },
      {
        title: "Workout Notes",
        text: "Tried a new yoga routine today. Felt good but a bit tough on the shoulders. Repeat twice this week.",
        date: new Date(),
        userId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('notes', null, {});
  },
};
