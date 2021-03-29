const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project's title?"
          },
          {
            type: "input",
            name: "description",
            message: "Give a brief description of your project:"
          },
          {
            type: "input",
            name: "installation",
            message: "Provide installation instructions:"
          },
          {
            type: "input",
            name: "usage",
            message: "What is your project used for?"
          },
          {
            type: "input",
            name: "contributions",
            message: "What are the contribution rules?"
          },
          {
            type: "input",
            name: "test",
            message: "Please provide test instructions if applicable:"
          },
          {
            type: "checkbox",
            message: "Choose a license:",
            name: "license",
            choices: [
              "MIT", "Apache", "GNU"
            ]
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?"
          },
          {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
          }
        ]);
      }

function generateREADME(answers) {
  return `# ${answers.project_title}
    
#### Table of Contents
1. [Project Description](#project-description)
2. [Installation Instructions](#installation-instructions)
3. [Usage Information](#usage-information)
4. [Contributor Guidelines](#contributor-guidelines)
5. [Code of Conduct](#code-of-conduct)
6. [Test Instructions](#test-instructions)
7. [License](#license)
8. [Questions](#questions)


## Project Description
* ${answers.description}

## Installation Instructions
* ${answers.installation}

## Usage Information
* ${answers.usage}

## Contributor Guidelines
* ${answers.contributions}

## Test Instructions
* ${answers.test}

## License
* licensed under the ${answers.license}

## Questions
* Contact me at: ${answers.email}

* GitHub: [${answers.github}](http://github.com/${answers.github})`;
  
}

promptUser()
  .then(function(answers) {
    const readme = generateREADME(answers);

 
    return writeFileAsync("README.md", readme);
  })
  .then(function() {
    console.log(" README.md has been created!");
  })
  .catch(function(err) {
    console.log(err);
  });
