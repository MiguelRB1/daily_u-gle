const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL,{
  dialectModule: require('mysql2'),
});

// const sequelize = new Sequelize('Dailyugle', 'root', 'password', {
//   host: 'localhost',
//   dialect: 'mysql', 
//   dialectModule: require('mysql2'),
// });
module.exports = sequelize;