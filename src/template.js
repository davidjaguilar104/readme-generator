module.exports = templateData => {
    console.log(templateData); // shows answers object


    return `
# ${templateData.title}

## Description

${templateData.description}

## Table of Contents 
- [Installation](#Installation)
- [Usage]
- [Credits]
- [License]

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

${templateData.questions}
`
};