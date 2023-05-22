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
const sequelize = new Sequelize('Dailyugle', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql', 
  dialectModule: require('mysql2'),
});
mysql://b27e812ca992f7:d9a46929@us-cdbr-east-06.cleardb.net/heroku_b981481c0181f9b?reconnect=true
module.exports = sequelize;