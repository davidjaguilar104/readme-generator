// TODO: Include packages needed for this application

const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
const generatePage = require('./src/template.js');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input

const promptUser = readmeData => {

    

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        // build out table of contents with no prompt 
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Also, provide a step-by-step description of how to get the application running. (Required)',
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log('Please provide installation steps!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use. (Required)',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions.');
                    return false;
                }
            }
        }
    ])
}

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


promptUser()
.then(readmeData => console.log(readmeData)) // logs answers object to console


// PICK UP TRYING TO CREATE A README WITH TITLE ONLY SO FAR