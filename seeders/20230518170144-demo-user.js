'use strict';

/** @type {import('sequelize-cli').Migration} */
const User = require('../user');
const userData = require('./userData.json');
const sequelize = require('../database/connection');
module.exports = {
  up: (queryInterface, Sequelize) => {
    sequelize.sync({ force: true });
    return User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};


// const sequelize = require('../database/connection');
// const User = require('../user');

// const userData = require('./userData.json');
// // const projectData = require('./projectData.json');

// const seedDatabase = async () => {
  // await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   // for (const project of projectData) {
//   //   await Project.create({
//   //     ...project,
//   //     user_id: users[Math.floor(Math.random() * users.length)].id,
//   //   });
//   // }

//   process.exit(0);
// };

// seedDatabase();

