// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a short description of your project'
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: []
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How does the user install dependencies',
        default: 'npm i'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can the user contribute to this project'
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(inquirerResponses => {
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
