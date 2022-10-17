// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
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
    message: "Please choose a license?",
    name: "lics",
    // Create an array for the list of Licenses
    choices: ["MIT", "Apache 2.0", "ISC", "BSD3", "BSD2", "LGPLv2.1"],
    // When the user has choosen liscense then a correspoding badge is generated near the top of the page

    // A notice explains which license the application is covered under License
  },
  {
    // Contributing
    type: "checkbox",
    message: "What are the guidelines for users to contribute?",
    name: "contribute",
    // Create an array for the list of Licenses
    choices: ["Personal Guidelines", "Contributor Covenant"],
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

function askQuestions() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    fs.writeFile("generatedreadme.md", generateMarkdown(data), (err) => {
      if (err) console.log(err);
     else console.log("Successfully created file!");
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  askQuestions();
  // TODO: Create a function to write README file
}

// Function call to initialize app
init();
