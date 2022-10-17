// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #Title
  ${data.title}

  ## Badge
  
  ## Description
  ${data.descript}
  
  ## Table of Contents
  - [Title](#${data.title})
  - [Badge](#badge)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.use}
  
  ## License
  ${data.lics}
  
  ## Contributing
  ${data.contribute}
  
  ## Tests
  ${data.test}
  
  ## Questions
  ${data.github}
  ${data.email}
  ${data.contact}
  `;
}

module.exports = generateMarkdown;
