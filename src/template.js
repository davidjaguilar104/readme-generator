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

${templateData.license} 

## Contributing

${templateData.contributing}

## Tests 

${templateData.tests}

## Questions

${templateData.questionGitHub}
${templateData.questionEmail}
`
};