// Function that returns a license badge based on which license is passed in or an empty string
function renderLicenseBadge(license) {
  let licenseOption = license;
  let licenseBadge = '';

  if (licenseOption === 'GPLv3') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (licenseOption === 'LGPLv3') {
      licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (licenseOption === 'MPL 2.0') {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }  else if (licenseOption === 'Apache 2.0') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (licenseOption === 'MIT') {
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (licenseOption === 'ISC') {
      licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (licenseOption === 'Unlicense') {
    licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else {
    licenseBadge = '';
  }
  return licenseBadge
}

// Function that returns the license link or an empty string
function renderLicenseLink(license) {
  let licenseOption = license;
  let licenseLink = '';

  if (licenseOption === 'GPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/'
  } else if (licenseOption === 'LGPLv3') {
      licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/'
  } else if (licenseOption === 'MPL 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/'
  }  else if (licenseOption === 'Apache 2.0') {
      licenseLink = 'https://choosealicense.com/licenses/apache-2.0/'
  } else if (licenseOption === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (licenseOption === 'ISC') {
      licenseLink = ''
  } else if (licenseOption === 'Unlicense') {
    licenseLink = 'https://choosealicense.com/licenses/unlicense/'
  } else {
    licenseLink = '';
  }
  return licenseLink
}

// Function that returns the license section of README or an empty string
function renderLicenseSection(license) {
  let licenseOption = license;
  let licenseMessage = '';

  if (licenseOption === 'GPLv3') {
    licenseMessage = 'The GNU General Public License is a free, copyleft license for software and other kinds of works.';
  } else if (licenseOption === 'LGPLv3') {
    licenseMessage = 'This version of the GNU Lesser General Public License incorporatesthe terms and conditions of version 3 of the GNU General Public License, supplemented by the additional permissions listed below.';
  } else if (license === 'MPL 2.0') {
    licenseMessage = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
  } else if (licenseOption === 'Apache 2.0') {
    licenseMessage = 'License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.';
  } else if (licenseOption === 'MIT') {
    licenseMessage = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions...';
  } else if (licenseOption === 'ISC') {
    licenseMessage = 'The software is provided “as is” and isc disclaims all warranties with regard to this software including all implied warranties of merchantability and fitness. In no event shall isc be liable for any special, direct, indirect, or consequential damages or any damages whatsoever resulting from loss of use, data or profits, whether in an action of contract, negligence or other tortious action, arising out of or in connection with the use or performance of this software.';
  } else if (licenseOption === 'Unlicense') {
    licenseMessage = 'Anyone is free to copy, modify, publish, use, compile, sell, ordistribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.';
  } else {
    licenseMessage = '';
  }
  return licenseMessage
}


// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Badge
  ${renderLicenseBadge(data.license[0])}
  
  ## Description
  ${data.descript}
  
  ## Table of Contents
  - [Title](#title)
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
  ${data.license}
  <br>
  ${renderLicenseSection(data.license[0])}
  <br>
  License link: ${renderLicenseLink(data.license[0])}
  
  ## Contributing
  ${data.contribute}
  
  ## Tests
  ${data.test}
  
  ## Questions
  GitHub Username: ${data.github}
  <br>E-mail: ${data.email}
  <br>Contact: ${data.contact}
  `;
}

module.exports = generateMarkdown;
