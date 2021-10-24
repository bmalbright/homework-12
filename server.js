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

//checking connection
db.query('SELECT * FROM employees', function (err, results) {
  console.log(results);
  console.table(results);
});

// Converting HW 10 for this

function init() {
  inquirer.prompt(initialPrompt).then((data) => {
 
    if(data.initialOptions==='View all departments') {
      console.table(departments);
    }
    if(data.initialOptions==='View all roles') {
      console.table(roles);
    }
 //    console.log(teamMembers);
    if(data.initialOptions==='View all employees') {
     // const employees = new Intern(data.name, data.id, data.email, data.college)
      console.table(employees);
    }

    Const initialPrompt = [
      {
        type: "list",
        name: "initialOptions",
        message: "Please choose an option.",
        choices: [
          'View all departments', 
          'View all roles', 
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee'
        ],
      },
    ];






init ();