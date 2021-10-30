const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const consoleTable = require("console.table");

// Connect to database
const db = mysql2.createConnection(
  {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "pass1234",
    database: "whac_employees_db",
  },
  console.log(`Connected to the whac_employees_db database.`)
);

// defines the init function and determines the response to the questions
function init() {
  inquirer.prompt(initialPrompt).then((data) => {
    if (data.initialOptions === "View all departments") {
      db.query(`SELECT * FROM departments`, function (err, results) {
        console.table(results);
        init();
      });
    }

    if (data.initialOptions === "View all roles") {
      db.query(
        `SELECT roles.id, roles.title, roles.wage, departments.department_name 
        FROM roles 
        LEFT JOIN departments ON roles.department_id = departments.id;`,
        function (err, results) {
          console.table(results);
          init();
        }
      );
    }

    if (data.initialOptions === "View all employees") {
      db.query(
        `SELECT e.id, e.first_name, e.last_name, r.title, r.wage, d.department_name, m.last_name AS mgr_last
        FROM employees e
        LEFT JOIN roles r ON e.roles_id = r.id 
        LEFT JOIN departments d ON d.id = r.department_id
        LEFT JOIN employees m ON e.manager_id = m.id`,
        function (err, results) {
          console.table(results);
          init();
        }
      );
    }

    if (data.initialOptions === "Add a department") {
      inquirer.prompt(departPrompt).then((data) => {
      db.query(`INSERT INTO departments (department_name) VALUES (\'${data.name}\')`);
        console.table(data);
      init();
    });
    };

    if (data.initialOptions === "Add a role") {
      inquirer.prompt(rolePrompt).then((data) => {
        db.query(`
        INSERT INTO roles (title, wage, department_id) 
        SELECT \'${data.title}\', ${data.wage}, id
        FROM departments
        WHERE department_name = \'${data.department}\'`);
      console.log(data);
      init()
      });
    };

    if (data.initialOptions === "Add an employee") {
      inquirer.prompt(employeePrompt).then((data) => {
        db.query(`
        INSERT INTO employees (first_name, last_name, roles_id) 
        SELECT \'${data.first_name}\', \'${data.last_name}\', id
        FROM roles 
        WHERE title = \'${data.title}\'`);
      console.log(data);
      init()
    })};

    if (data.initialOptions === "Update an employee") {
      inquirer.prompt(employeeUpdatePrompt).then((data) => {
        db.query(`
        UPDATE employees
        WHEN \'${data.first_name && data.last_name}\' === \'${employees.first_name && employees.last_name}\';
        SET roles_id
        WHERE title = \'${data.title}\'`);
      console.log(data);
      init()
    })};

    if (data.initialOptions === "Quit") {
      process.exit(0);
    };
  });
};


//prompt questions to the user up initiation
const initialPrompt = [
  {
    type: "list",
    name: "initialOptions",
    message: "Please choose an option.",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee",
      "Quit",
    ],
  },
];


// prompt question for adding a department
let departPrompt = [ 
  { 
  type: "input",
  name: "name",
  message: "What is the name of the department?",
  },
  ];


// prompt questions to add a role
let rolePrompt = [
  {
    type: "input",
    name: "title",
    message: "What is the role?",
  },
  {
    type: "input",
    name: "wage",
    message: "What is the hourly wage for this position?",
  },
  {
  type: "list",
  name: "department",
  message: "What department does this role fall under?",
  choices: ["Operations", "Programs"]
  }
];

// prompt questions for adding an employee
let employeePrompt = [
  {
    type: "input",
    name: "first_name",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the employee's last name?",
  },
  {
    type: "list",
    name: "title",
    message: "What position is this employee filling?",
    choices: ["operations manager", "lifeguard", "maintenance", "frontdesk", "coach", "instructor", "program manager"]
    }
];

let employeeUpdatePrompt = [
  {
    type: "input",
    name: "first_name",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the employee's last name?",
  },
  {
    type: "list",
    name: "title",
    message: "Choose a new position for this employee?",
    choices: ["operations manager", "lifeguard", "maintenance", "frontdesk", "coach", "instructor", "program manager"]
    }
];



// function that activates the prompt questions to the user.
init();
