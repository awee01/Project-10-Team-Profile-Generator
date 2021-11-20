const inquirer = require('inquirer');
const fs = require("fs");
const generate = require('./src/generate.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


let totalarray = [];

function promptInitial() {

  console.log(`
  ===============
  Welcome Manager
  ===============
  `);

    return inquirer.prompt([
      {
     type: 'Input',
     name: 'ManagerName',
     message: 'Enter your Name',
    },
    {
      type: 'input',
      name: 'ManagerID',
      message: 'Enter your ID number',
    },
    {
      type: 'input',
      name: 'ManagerEmail',
      message: 'Enter your email address',
    },
    {
      type: 'input',
      name: 'ManagerOfficeNumber',
      message: 'Enter your office number',
    }
  ])
  
  .then(answers => {
    const manager = new Manager(answers.ManagerName, answers.ManagerID, answers.ManagerEmail, answers.ManagerOfficeNumber);
    totalarray.push(manager);
    promptaddMenu();
  })

  };

  function promptaddMenu() {

    console.log(`
    ===============
    Team Builder
    ===============
    `);

    return inquirer.prompt([{
        type: 'list',
        name: 'menu',
        message: 'Select an Option',
        choices: ['Add an Intern to my Team', 'Add an Engineer to my Team', 'Generate my Team']
      }])
      .then(data => {
        switch (data.menu) {
          case "Add an Intern to my Team":
            promptIntern();
            break;

          case "Add an Engineer to my Team":
            promptEngineer();
            break;

          case "Generate my Team":
            generateTeam();
        }
      });
    };

  function promptEngineer() {

    console.log(`
    ===============
    Adding a New Engineer
    ===============
    `);

    return inquirer.prompt([
      {
     type: 'Input',
     name: 'EngineerName',
     message: 'What is the name of the Engineer?',
    },
    {
      type: 'input',
      name: 'EngineerID',
      message: 'Enter their ID',
    },
    {
      type: 'input',
      name: 'EngineerEmail',
      message: 'Enter their email address',
    },
    {
      type: 'input',
      name: 'EngineerGitHub',
      message: 'Enter their Github Username',
    }
  ])

  .then(answers => {
    const engineer = new Engineer(answers.EngineerName, answers.EngineerID, answers.EngineerEmail, answers.EngineerGitHub);

    totalarray.push(engineer);
    promptaddMenu();
  })


  };

  function promptIntern() {

    console.log(`
    ===============
    Adding a New Intern
    ===============
    `);

    return inquirer.prompt([
      {
     type: 'Input',
     name: 'InternName',
     message: 'What is the name of the Intern?',
    },
    {
      type: 'input',
      name: 'InternID',
      message: 'Enter their ID',
    },
    {
      type: 'input',
      name: 'InternEmail',
      message: 'Enter their email address',
    },
    {
      type: 'input',
      name: 'InternSchool',
      message: 'Enter their school name',
    }
  ])

  .then(answers => {
    const intern = new Intern(answers.InternName, answers.InternID, answers.InternEmail, answers.InternSchool);
    
    totalarray.push(intern);

    promptaddMenu();

  })


  };

  
  function generateTeam() {
 
    console.log(`
    ===============
    Your team file has been generated, check index.html in /dist/
    ===============
    `);

       fs.writeFileSync('./dist/index.html', generate(totalarray));
}

promptInitial();