// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a brief description of the project",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the command that starts the application",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the command for testing the application",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can developers contribute to the project?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: []
  },
  {
    type: "input",
    name: "contributing",
    message: "How can developers contribute to the project?",
  },
];

inquirer.prompt(questions).then((answers) => {
  // Use user feedback for... whatever!!

  console.log(answers);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
