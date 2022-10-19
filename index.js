//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// Array of Questions for User Input
const questions = [
  {
    // Title
    type: "input",
    name: "title",
    message: "What is the title your project?",
  },
  {
    // Description
    type: "input",
    name: "descript",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    // Installation
    type: "input",
    name: "install",
    message: "What are the steps required to install your project?",
  },
  {
    // Usage
    type: "input",
    name: "use",
    message: "Provide instructions and examples for use.",
  },
  {
    // License
    type: "checkbox",
    message: 'Please select a license.',
    name: "license",
    // Array of Licenses
    choices: ['GPLv3', 'LGPLv3', 'MPL 2.0', 'Apache 2.0', 'MIT', 'ISC', 'Unlicense'],
    // When the user has choosen a License then a correspoding Badge is generated near the top of the page
    // A notice explains which license the application is covered under License
  },
  {
    // Contributing
    type: "checkbox",
    message: "What are the guidelines for users to contribute?",
    name: "contribute",
    // Create an array for the list of Licenses
    choices: ["Personal Guidelines", 'Contributor Covenant'],
  },
  {
    // Tests
    type: "input",
    name: "test",
    message: "Provide examples on how to run your application.",
  },
  {
    //Questions
    type: "input",
    name: "github",
    message: "Please enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message:"Please enter your e-mail that you use for GitHub.",
  },
  {
    type: "input",
    name: "contact",
    message: "How can users reach you?",
  },
];

// Function to write README file
function askQuestions() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    fs.writeFile("generatedMarkdown.md", generateMarkdown(data), (err) => {
      if (err) console.log(err);
     else console.log("Successfully created file!");
    });
  });
}

// Function to initialize app
function init() {
  askQuestions();
}

// Function call to initialize app
init();
