require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const cTable = require('console.table');
const figlet = require('figlet');

const startApp = async () => {
    console.log(
      figlet.textSync('Employee Manager', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      })
    );
};

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

let db;

const connectDb = async () => {
  db = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
  });
};

const addDepartment = async () => {
  const answer = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: 'What is the name of the department?'
  });
