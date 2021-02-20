// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Give a brief description of your project.'
        },
        {
           type: 'input',
           name: 'Installation',
           message: 'Provide installation instructions for your project.' 
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Explain how to use your project.'
        },
        {
           type: 'checkbox',
           name: 'License',
           choices: ['[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                    '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)']
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Provide contribution guidelines for your project.'
        },
        {
            type: 'input',
            name: 'Test',
            message: 'Provide applicable test instructions.'
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'Github',
            message: 'What is your Github username?'
        }
    ]);
}

// TODO: Create a function to write README file
function generateMarkdown(input) {
    return `# ${input.title}
    
    ## Table of Contents
    * [Description](#desciption)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Test](#test)
    * [Questions](#questions)
    
    ## Description
    ${input.description}
    
    ## Installation
    ${input.installation}
    
    ## Usage
    ${input.usage}
    
    ## License
    ${input.license}
    
    ## Contributing
    ${input.contributing}
    
    ## Test
    ${input.test}
    
    ## Questions
    For additional questions, please contact ${input.email}
    Follow my Github account at [${input.Github}](http://github.com/${input.Github})
    `;
}

// TODO: Create a function to initialize app
promptUser()
    .then(function(input) {
        const markdown = generateMarkdown(input);

        return writeFileAsync("README.md", markdown);
    })
    .then(function() {
        console.log("Your README.md has been generated.");
    })
    .catch(function(err) {
        console.log(err);
    });

// Function call to initialize app
init();