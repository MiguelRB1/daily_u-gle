// Import required modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Configure MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Signup route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check if the username is already taken
  connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query: ' + err.stack);
      return res.status(500).json({ message: 'An internal server error occurred' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Insert the new user into the database
    connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
      if (err) {
        console.error('Error executing MySQL query: ' + err.stack);
        return res.status(500).json({ message: 'An internal server error occurred' });
      }

      // User successfully created
      return res.status(200).json({ message: 'User created successfully' });
    });
  });
});

// Start the server
app.listen(3002, () => {
  console.log('Server started on port 3002');
});
