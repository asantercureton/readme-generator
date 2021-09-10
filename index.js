// ARRANGE
const inquirer = require('inquirer');
// ACTION (Pure Functions)
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What was your motivation for developing your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the instructions for your project?',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'How is your project designed to be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can someone contribute to your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How can your project be tested?',
        name: 'test',
    },
    {
        type: 'checkbox',
        message: 'Which license is your project covered under?',
        name: 'license',
        choices: [
            'BSD',
            'MIT',
            'GPL',
            'ISC',
        ]
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
]).then(({title, description, installation, instructions, usage, contributing, test, license, gitHub}) => {
    // title, description, installation, instructions, usage, contributing, test, license, gitHub
})
// WRITE FILE