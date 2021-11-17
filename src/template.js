module.exports = templateData => {
    console.log(templateData); // shows answers object

    return `
    # ${templateData.title}
    ___

    ## Description
    ___

    ${templateData.description}

    ## Table of Contents 
    - [Installation]
    - [Usage]
    - [Credits]
    - [License]
    ___

    ## Installation
    ___

    ${templateData.installation}

    ## Usage
    
    ___

    ${templateData.usage}

    ## License

    ___

    ${templateData.license}

    ## Contributing
    
    ___

    ${templateData.contributing}

    ## Tests 
    
    ___

    ${templateData.tests}

    ## Questions 
    
    ___
    
    ${templateData.questions}
    `
};