// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];
// Prompted for information about my application repository
const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
	type:'input',
	name:'yourName',
	message: 'What is your name?',
}, {
    type:'input',
	name:'',
	message:'',
}, {
    type:'input',
	name:'',
	message:'',
}, {
    type:'input',
	name:'',
	message:'',
}, {
    type:'input',
	name:'',
	message:'',
}
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
]).then(function(answers) {
    const readMeData = inputAnswers(answers)
    fs.writeFile('README.md', readMeData, (error) => {
        error ? console.log(error) : console.log('Success!')
    }) 
});

const inputAnswers = (answers) => {
    console.log(answers)
    //Input reademe structure
    return `
    # Title 
    //project title
    ## Description
    //
    ## Table of Contents
    //Clickable links 

    ## Installation

    ## Usage

    ## License

    ## Contributing

    ## Tests

    ## Questions
    //GitHub username
    //GitHub Link
    //email address and how to reach me
 `
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
