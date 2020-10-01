// import NPM module you need

var inquirer = require("inquirer");
var fs = require('fs');
// const Choices = require("inquirer/lib/objects/choices");

// Ask User Questions about their readMe file

inquirer.prompt([

    // Question 1
    {
        type: "input",
        message: "What is the TITLE of your project?",
        name: "ProjectName",
    },
    // Question 2
    {
        type: "input",
        message: "What is the DESCRIPTION of your project?",
        name: "ProjectDescription",
    },
    // Question 3
    {
        type: "checkbox",
        message: "Choose project license",
        name: "applicationlicense",
        choices: ["MIT", "ISC", "Apache 2.0", "None"],
    },
    // Question 4
    {
        type: "input",
        message: "Did you install anything?",
        name: "ProjectInstallations",
    },
    // Question 5
    {
        type: "input",
        message: "What's your Github username?",
        name: "username",
    },
    // Question 6
    // {
    //     type: "input",
    //     message: "Does this application need a license?",
    //     name: "applicationlicense",
    // },
    // Question 7
    {
        type: "input",
        message: "What was your contribution?",
        name: "contribution",
    },
    // Question 8
    {
        type: "input",
        message: "Did you run any tests for your application?",
        name: "TestApplication",
    },
    // Question 9
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    // {
    //     type: "input",
    //     message: "What's your Github username?",
    //     name: "username",
    // },
    {
        type: "input",
        message: "Terms of usage",
        name: "usage",
    }

]).then(function (response) {
    console.log(response)
    var readMeText = `
# ${response.ProjectName}
------------------------
_${response.ProjectDescription}_
--------------------------------
## author: ${response.contribution}
## Developer Profile: https://github.com/${response.username}

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

    fs.writeFileSync("OUTPUT_README.md", readMeText, function (err) {
        if (err) {
            throw err
        }
        console.log("File Generator")
    })
        
    });





