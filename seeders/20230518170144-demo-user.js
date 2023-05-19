'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("User", [
      {
        name: "Sal",
        email: "sal@hotmail.com",
        password: "$2a$10$YjMFKEh1PDtTos8mrF8wiOrc0xknagSrPtyEERu2V1Vk1U7beYYBm"

      },
      {
        name: "Lernantino",
        email: "lernantino@gmail.com",
        password: "$2a$10$sBzLKi6kTyUX4qz5IvWIMeQ8KZv4EACrT0akc.ySOisIq/m.c1A9K"

      },
      {
        name: "Amiko",
        email: "amiko2k20@aol.com",
        password: "$2a$10$mLUBILzyT08zvw12uCwm7u9Fz8pQj9HRJVNof7rrrTW8erC9jAWJK"
        
      }
    ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
