// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "http://localhost:5432",
//   user: "root",
//   password: "password",
//   database: "Dailyugle"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });




// // safe copy


var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.DB_HOST || "http://localhost:5432",
  user: process.env.DB_USERNAME ||"root",
  password: process.env.DB_PASSWORD ||"password",
  database: process.env.DB_DBNAME ||"Dailyugle"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});