// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of this project?"
    },
    {
    type: "input",
    name: "description",
    message: "Give a description of this project."
    },
    {
    type: "input",
    name: "usage",
    message: "What is this project used for?"
    },
    {
    type: "list",
    name: "license",
    message: "Choose a license for this project:",
    choices: [
        "Apache", "Academic", "GNU", "MIT", "Mozilla", "Open"
    ]
    },
    {
    type: "input",
    name: "contributing",
    message: "Who contributed to this project?"
    },
    {
    type: "input",
    name: "test",
    message: "Is there a test included?"
    },
    {
    type: "input",
    name: "questions",
    message: "What should I do if I have an issue?"
    },
    {
    type: "input",
    name: "username",
    message: "Enter your GitHub username:"
    },
    {
    type: "input",
    name: "email",
    message: "Enter your email:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
