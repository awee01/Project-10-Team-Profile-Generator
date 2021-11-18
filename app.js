const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateTemplate = require("./src/generate");



function Prompt() {
    return inquirer 
    .prompt([
      {
     type: 'Text',
     name: 'Name',
     message: 'Enter the name of the Manager',
     choices: ['Manager', 'Engineer', 'Intern']
    },
    {
     type : 'text',
     name: 'employee',
     message: 'Enter your Employee Name(Required)'
    },
    {
      type: 'text',
      name: 'id',
      message: 'Enter Employee ID (Required)'
    },
    {
      type: 'text',
      name : 'email',
      message : 'Enter Employee email address (Required)'
    }
  ])

  };
