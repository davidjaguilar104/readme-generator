const writeFile = require('./utils/generateMarkdown.js');
const generatePage = require('./src/template.js');
const inquirer = require('inquirer');

const promptUser = () => {
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
            type: 'list',
            name: 'license',
            message: 'What license would you like to use? Choose one. (Required)',
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
            message: 'Enter testing instructions. (Required)',
            validate: testInput => {
                if(testInput) {
                    return true;
                } else {
                    console.log('Provide testing instructions for the app or say there are no tests currently.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questionGitHub',
            message: 'Enter your GitHub Username. (Required)',
            validate: questGitHubInput => {
                if(questGitHubInput) {
                    return true;
                } else {
                    console.log('You need to enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questionEmail',
            message: 'Enter your preferred email address, as well as brief instructions on how to reach you. (Required)',
            validate: questGitHubInput => {
                if(questGitHubInput) {
                    return true;
                } else {
                    console.log('You need to enter your email and instructions!');
                    return false;
                }
            }
        }
    ])
}

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

