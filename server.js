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
      db.query("SELECT * FROM departments", function (err, results) {
        console.table(results);
        init();
      });
    }

    if (data.initialOptions === "View all roles") {
      db.query(
        "SELECT roles.id, roles.title, roles.wage, departments.department_name FROM roles INNER JOIN departments ON roles.department_id = departments.id;",
        function (err, results) {
          console.table(results);
          init();
        }
      );
    }

    if (data.initialOptions === "View all employees") {
      db.query(
        "SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.wage, departments.department_name, employees.manager_id FROM employees INNER JOIN roles ON employees.roles_id = roles.id INNER JOIN departments WHERE departments.id = roles.department_id;",
        function (err, results) {
          console.table(results);
          init();
        }
      );
    }

    if (data.initialOptions === "Add an department") {
      inquirer.prompt(departPrompt).then((data) => {
      db.query("INSERT INTO departments (department_name) VALUES (data.name)");
        console.log("Department added!");
      consoleTable(data);
      init();
    });
    };

    if (data.initialOptions === "Add an role") {
      inquirer.prompt(rolePrompt).then((data) => {
        db.query("INSERT INTO roles (title, wage) VALUES (data.title, data.wage)");
      console.log(data);
      init()
      });
    };

    if (data.initialOptions === "Add an employee") {
      inquirer.prompt(employeePrompt).then((data) => {
        db.query("INSERT INTO employees (first_name, last_name, roles_) VALUES (data.first_name, data,last_name, data.role)");
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
  validate: (data) => {
    if (data !== "") {
      return true;
    }
  },

  }];


// prompt questions to add a role
let rolePrompt = [
  {
    type: "input",
    name: "title",
    message: "What is the role?",
    validate: (data) => {
      if (data !== "") {
        return true;
      }
      return "Please enter a name with at least one valid letter.";
    }
  },
  {
    type: "input",
    name: "wage",
    message: "What is the hourly wage for this position?",
    validate: (data) => {
      if (data !== num) {
        return true;
      }
      return "Please enter a valid number.";
    },
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
    validate: (data) => {
      if (data !== "") {
        return true;
      }
      return "Please enter a name with at least one valid letter.";
    },
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the employee's last name?",
    validate: (data) => {
      if (data !== "") {
        return true;
      }
      return "Please enter a name with at least one valid letter.";
    },
  },
  {
    type: "list",
    name: "role",
    message: "What position is this employee filling?",
    choices: ["operations manager", "lifeguard", "maintenance", "frontdesk", "coach", "instructor", "program manager"]
    }
];





// function that activates the prompt questions to the user.
init();
