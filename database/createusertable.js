var mysql = require('mysql');

var con = mysql.createConnection({
  host: "http://localhost:5432",
  user: "root",
  password: "password",
  database: "Dailyugle"
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