const inquirer = require('inquirer')
const mysql2 = require('mysql2');
const consoleTable = require('console.table');

// Connect to database
const db = mysql2.createConnection( {
    host: 'localhost', 
    port: '3306',
    user: 'root',
    password: 'pass1234',
    database: 'whac_employees_db'
  },
  console.log(`Connected to the whac_employees_db database.`)
);



function init() {
  inquirer.prompt(initialPrompt).then((data) => {
 
    if(data.initialOptions==='View all departments') {
      db.query('SELECT * FROM departments', function (err, results) {
        console.table(results);
        init ();
    })};

    if(data.initialOptions==='View all roles') {
      db.query("SELECT roles.id, roles.title, roles.wage, departments.department_name FROM roles INNER JOIN departments ON roles.department_id = departments.id;", function (err, results) {
        console.table(results);
        init ();
    })};

    if(data.initialOptions==='View all employees') {
      db.query("SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.wage, departments.department_name FROM employees INNER JOIN roles ON employees.roles_id = roles.id;", function (err, results) {
        console.table(results);
        init ();
    })};
    
    if(data.initialOptions==='Add a department') {
      addDepartment ()
      console.log('Department added')
    }

    if(data.initialOptions==='Add a role') {
      addRole()
      console.log('Role added')
    }

    if(data.initialOptions==='Add an employee') {
      addEmployee()
      console.log('Employee added')
    }

    if(data.initialOptions==='Quit') {
      process.exit(0);
    }

  });
};

    const initialPrompt = [
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
          'Update an employee', 
          'Quit'
        ],
      },
    ];

addDepartment = 

addRole = 

addCustomer= 


init ()
