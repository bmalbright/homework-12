const inquirer = require('inquirer')
const mysql2 = require('mysql2');
const consoleTable = require('console.table');

// Connect to database
const db = mysql2.createConnection( {
    host: 'localhost', 
    port: '3306' 
    user: 'root',
    password: 'pass1234',
    database: 'whac_employees_db'
  },
  console.log(`Connected to the whac_employees_db database.`)
);

// Converting HW 10 for this

function init() {
  inquirer.prompt(initialPrompt).then((data) => {
 
    if(data.initialOptions==='View all departments') {
      console.table(totalDepartments);
    }
    if(data.initialOptions==='View all roles') {
      console.table(totalRoles);
    }
    if(data.initialOptions==='View all employees') {
      console.table(totalEmployees);
    }
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
          'Quit'
        ],
      },
    ];


    const totalDepartments = db.query('SELECT * FROM departments')


    const totalRoles
    const totalEmployees
    const addDepartment
    const addRole
    const addEmployee




init ();