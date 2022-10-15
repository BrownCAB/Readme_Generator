// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;

// TODO: Create an array of questions for user input
//const questions = [];

const questions = [] => {
    return inquirer.prompt([
         {
        	type:'input',
        	name:'title',
        	message: 'What would you like to title your project?',
        }, {
        type:'input',
        	name:'desc',
        	message:'Describe your project?',
        }, {
        type:'input',
        	name:'install',
        	message:'What are the steps required to install your project?',
        }, {
        type:'input',
        	name:'usage',
        	message:'How do you use this application?',
        }, {
        type:'input',
        	name:'contributes',
        	message:'List your collaborators.',
        }, {
        type:'input',
        	name:'tests',
        	message:'',
        }, {
        type:'input',
        	name:'license',
        	message:'Choose a license.',
        	liscence: ['ISC', 'MIT', 'Apache', 'BSD3', 'BSD2', 'GPL/LGPL', 'Mozilla', 'CDD'],
        }, {
        type:'input',
        	name:'github',
        	message:'What is your Github Username?',
        }, {
        type:'input',
        	name:'email',
        	message:'What is your email address?',
        },  
    ]);
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
function writeTofile(title, decs, install) => {
    //Input reademe structure
    `
    # ${title} 
    //project title
    ## Description
    //
    ## Table of Contents
        Title
        Installation
        Usage
        Contributing
        Tests

    ## Installation

    ## Usage

    ## License

    ## Contributing

    ## Tests

    ## Questions
    //GitHub username
    //GitHub Link
    //email address and how to reach me'`
};

// TODO: Create a function to initialize app
function init() {} => {
    promptUser()
    .then((answers) => writeFile('Readme.md', generateReadMe(answers)))
    .then(() => console.log('Successfully added to Readme'))
    .catch((err) => console.error(err));

// Function call to initialize app
init();
