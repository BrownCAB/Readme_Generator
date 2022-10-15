// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [];

questions = () => {
return inquirer.prompt([
    {
    // Title
    type: 'input',
    name: 'title',
    message: 'What is the title your project?',
    },  {
    // Description
    type: 'input',
    name: 'descript',
    message: 'Provide a short description explaining the what, why, and how of your project.',
    }, {
    // Installation
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project?',
    }, {
    // Usage
    type: 'input',
    name: 'use',
    message: 'Provide instructions and examples for use.',
    }, {
    // License
    type: 'checkbox',
    message: 'Please choose a license?',
    name: 'lics',
    // Create an array for the list of Licenses
    choices: ['MIT', 'Apache 2.0', 'ISC', 'BSD3', 'BSD2', 'LGPLv2.1'],
    // When the user has choosen liscense then a correspoding badge is generated near the top of the page

    // A notice explains which license the application is covered under License

    }, {
    // Contributing
    type: 'checkbox',
    message: 'What are the guidelines for users to contribute?',
    name: 'contribute',
    // Create an array for the list of Licenses
    choices: ['Personal Guidelines', 'Contributor Covenant'],
    }, {
    // Tests
    type: 'input',
    name: 'test',
    message: 'Provide examples on how to run your application.',
    }, {
    //Questions
    type: 'list',
    name: 'questions',
    message: [
        'Please enter your GitHub username.',
        'Please enter your e-mail that you use for GitHub.',
        'How can users reach you?',
        ]
        }
    ]); 
};

const inputAnswers = (answers) => {
    console.log(answers)
    return `
    # ${answers.title}

    ## Badge
    
    ## Description
    ${answers.descript}

    ## Table of Contents
    - [Title](#${answers.title})
    - [Badge](#badge)
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)


    ## Installation
    ${answers.install}
    
    ## Usage
    ${answers.use}

    ## License
    ${answers.lics}

    ## Contributing
    ${answers.contribute}

    ## Tests
    ${answers.test}

    ## Questions
    ${answers.questions}
    `
}

// TODO: Create a function to initialize app
function init() {
    questions()
    // TODO: Create a function to write README file  
    .then((answers) => writeFile('readme.md', inputAnswers(answers)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();


