// ARRANGE
const inquirer = require('inquirer');
const fs = require('fs');

const outputREADME = (readMe) => {
    fs.writeFile('README2.md', readMe, (err) => {
        if (err) console.log(err);
        console.log('Success');
    })
};

// ACTION
const renderTitle = (title, license) => {
    return `# ${title} ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
};

const renderDescription = (description) => {
    return `## Description
${description}`
};

const renderTableOfContents = () => {
    return `## Table Of Contents
[Instructions](#instructions)

[Usage](#usage)

[Contributing](#contributing)

[Test](#test)

[License](#license)

[GitHub](#gitHub)`
};

const renderInstallation = (installation) => {
    return `## Installation
${installation}`
};

const renderInstructions = (instructions) => {
    return `## Instructions
${instructions}`
};

const renderUsage = (usage) => {
    return `## Usage
${usage}`
};

const renderContributing = (contributing) => {
    return `## Contributing
${contributing}`
};

const renderTest = (test) => {
    return `## Test
${test}`
};

const renderLicense = (license) => {
    return `## License
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
};

const renderGitHub = (gitHub) => {
    return `## GitHub Username
${gitHub}`
};

const renderBaseTemplate = (
    titleTemplate,
    descriptionTemplate,
    tableOfContentsTemplate,
    installationTemplate,
    instructionsTemplate,
    usageTemplate,
    contributingTemplate,
    testTemplate,
    licenseTemplate,
    gitHubTemplate,
    ) => {
    return `${titleTemplate}
${descriptionTemplate}
${tableOfContentsTemplate}
${installationTemplate}
${instructionsTemplate}
${usageTemplate}
${contributingTemplate}
${testTemplate}
${licenseTemplate}
${gitHubTemplate}`
};

var questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: your_title => {
        if (your_title) {
            return true;
        } else {
            console.log('Provide a title for your project');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What was your motivation for developing your project?',
    name: 'description',
    validate: your_description => {
        if (your_description) {
            return true;
        } else {
            console.log('Provide a description for your project');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'How do you install your project?',
    name: 'installation',
    validate: your_installation => {
        if (your_installation) {
            return true;
        } else {
            console.log('Provide installation details for your project');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What are the instructions for your project?',
    name: 'instructions',
    validate: your_instructions => {
        if (your_instructions) {
            return true;
        } else {
            console.log('Provide instructions for your project');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'How is your project designed to be used?',
    name: 'usage',
    validate: your_usage => {
        if (your_usage) {
            return true;
        } else {
            console.log('Provide usage details for your project');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'How can someone contribute to your project?',
    name: 'contributing',
    validate: your_contributing => {
        if (your_contributing) {
            return true;
        } else {
            console.log('Provide instructions for making contributions to your project');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'How can your project be tested?',
    name: 'test',
    validate: your_test => {
        if (your_test) {
            return true;
        } else {
            console.log('Provide test details for your project');
            return false;
        }
    }
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
    ],
    validate: your_license => {
        if (your_license) {
            return true;
        } else {
            console.log('Select a license for your project');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'gitHub',
    validate: your_gitHub => {
        if (your_gitHub) {
            return true;
        } else {
            console.log('Provide your GitHub username');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate: your_email => {
        if (your_email) {
            return true;
        } else {
            console.log('Provide your email address');
            return false;
        }
    }
},

]
inquirer.prompt(questions)
.then(({ title, description, installation, instructions, usage, contributing, test, license, gitHub }) => {
    // title, description, installation, instructions, usage, contributing, test, license, gitHub
    const titleTemplate = renderTitle(title, license);
    const descriptionTemplate = renderDescription(description);
    const tableOfContentsTemplate = renderTableOfContents();
    const installationTemplate = renderInstallation(installation);
    const instructionsTemplate = renderInstructions(instructions);
    const usageTemplate = renderUsage(usage);
    const contributingTemplate = renderContributing(contributing);
    const testTemplate = renderTest(test);
    const licenseTemplate = renderLicense(license);
    const gitHubTemplate = renderGitHub(gitHub);
    const baseTemplate = renderBaseTemplate(
        titleTemplate,
        descriptionTemplate,
        tableOfContentsTemplate,
        installationTemplate,
        instructionsTemplate,
        usageTemplate,
        contributingTemplate,
        testTemplate,
        licenseTemplate,
        gitHubTemplate,
    );
    outputREADME(baseTemplate);
});
