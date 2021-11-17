// TODO: Include packages needed for this application

const writeFile = require('./utils/generateMarkdown.js');
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
        // build out table of contents in template.js with no prompt 
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
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license would you like to use?',
            choices: ['MIT', 'GNU General Public License v3.0', 'ISC'],
            validate: choicePicked => {
                if(choicePicked) {
                    return true;
                } else {
                    console.log('Choose a license');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add instructions on how other developers can contribute to this project! (Required)',
            validate: conInput => {
                if(conInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidlines or say you do not want contributors at this time.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter testing instructions.',
            validate: testInput => {
                if(testInput) {
                    return true;
                } else {
                    console.log('Provide testing instructions for the app or say there are no tests currently.');
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
.then(readmeData => {
    return generatePage(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => {
    console.log(err);
})
//.then(readmeData => console.log(generatePage(readmeData))); // logs answers object to console and title in md format


// PICK UP TRYING TO CREATE A README WITH TITLE ONLY SO FAR