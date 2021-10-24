const inquirer = require('inquirer')
const mysql2 = require('mysql2');
const consoleTable = require('console.table');

// Connect to database
const db = mysql2.createConnection( {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'pass1234',
    database: 'whac_employees_db'
  },
  console.log(`Connected to the whac_employees_db database.`)
);

db.query('SELECT * FROM employees', function (err, results) {
  console.log(results);
  console.table(results);
});

