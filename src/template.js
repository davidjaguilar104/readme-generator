module.exports = templateData => {
    console.log(templateData); // shows answers object

    return `
# ${templateData.title}

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

Licensed under the [${templateData.license}](MIT-LICENSE.txt) license.

## Contributing

${templateData.contributing}

## Tests 

${templateData.tests}

## Questions

[GitHub Profile](https://github.com/${templateData.questionGitHub})       
${templateData.questionEmail} 
`
};