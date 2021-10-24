const express = require('express');
const inquirer = require('inquirer')
const mysql2 = require('mysql2');
const consoleTable = require('console.table');


const PORT = process.env.PORT || 3001;

const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

