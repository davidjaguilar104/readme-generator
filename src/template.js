module.exports = templateData => {
    console.log(templateData); // shows answers object

    return `
# ${templateData.title}     

[![License: ${templateData.license}](https://img.shields.io/badge/License-${templateData.license}-yellow.svg)](https://opensource.org/licenses/${templateData.license})

## Description

${templateData.description}

## Table of Contents 
- [Description](#Description) 
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${templateData.installation}

## Usage

${templateData.usage}

## License

Licensed under the [${templateData.license}](./src/${templateData.license}-LICENSE.txt) license.        


## Contributing

${templateData.contributing}

## Tests 

${templateData.tests}

## Questions

GitHub Username: ${templateData.questionGitHub} [GitHub Profile](https://github.com/${templateData.questionGitHub})       
Email: ${templateData.questionEmail} 
`
};