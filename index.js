// import NPM module you need

var inquirer = require("inquirer");
var fs = require('fs');

// Ask User Questions about their readMe file

inquirer.prompt([

    // Questions that will be prompted to the user
    {
        type: "input",
        message: "What is the TITLE of your project?",
        name: "ProjectName",
    },

    {
        type: "input",
        message: "What is the DESCRIPTION of your project?",
        name: "ProjectDescription",
    },

    {
        type: "checkbox",
        message: "Choose project LICENSE",
        name: "applicationlicense",
        choices: ["MIT", "ISC", "Apache 2.0", "None"],
    },

    {
        type: "input",
        message: "Did you INSTALL anything?",
        name: "ProjectInstallations",
    },

    {
        type: "input",
        message: "What's your Github username?",
        name: "username",
    },

    {
        type: "input",
        message: "Who contributed to project?",
        name: "contribution",
    },

    {
        type: "input",
        message: "Did you run any TESTS for your application?",
        name: "TestApplication",
    },

    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },

    {
        type: "input",
        message: "Terms of usage",
        name: "usage",
    }

    // This is getting the answer from the user and printing it in the terminal
]).then(function (response) {
    console.log(response)

    // This is where it's grabbing the object and is looking through the answers for the value with the same name
    var readMeText = `
# ${response.ProjectName}
------------------------
_${response.ProjectDescription}_
--------------------------------
## author: ${response.contribution}
## Developer Profile: https://github.com/${response.username}

    // This is how you make it so the links will work, so when you click on the portion of the table of contents it goes to that portion of the page
### Table Of Contents
* [license](#license)
* [usage](#usage)
* [Installation](#Installation)
* [Test](#Test)


## license
![GitHub license](https://img.shields.io/badge/license-${response.applicationlicense}-blue.svg)


## usage
${response.usage}
## Installation
${response.ProjectInstallations}
## Test
${response.TestApplication}
If you have any questions regarding this project please reach me at ${response.email}
    `
    console.log(readMeText)

    // This is where all my info will be printed in vs code and in the web.
    fs.writeFileSync("OUTPUT_README.md", readMeText, function (err) {
        if (err) {
            throw err
        }
        console.log("File Generator")
    })

});





