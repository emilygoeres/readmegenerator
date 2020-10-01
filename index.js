// import NPM module you need

var inquirer = require("inquirer");
var fs = require('fs');
const Choices = require("inquirer/lib/objects/choices");

// Ask User Questions about their readMe file

inquiree.prompt([

// Question 1
    {
        type: "input",
        message: "What is the TITLE of your project?",
        name: "Project Name",
    }
// Question 2
    {
        type: "input",
        message: "What is the DESCRIPTION of your project?",
        name: "Project Description",
    }
// Question 3
    {
        type: "checkbox",
        message: "Please Add a Table of Contents",
        name: "Project Table of Contents",
        choices: ["index.js", "package-lock.js", "package.json", "style.css", "index.html", "images", "readMe"],
    }
// Question 4
    {
        type: "input",
        message: "Did you install anything?",
        name: "Project Installations",
    }
// Question 5
    {
        type: "input",
        message: "What is the application used for?",
        name: "application usage",
    }
// Question 6
    {
        type: "input",
        message: "Does this application need a license?",
        name: "application license",
    }
// Question 7
    {
        type: "input",
        message: "What was your contribution?",
        name: "contribution",
    }
// Question 8
    {
        type: "input",
        message: "Did you run any tests for your application?",
        name: "Test Application",
    }
// Question 9
    {
        type: "input",
        message: "Did you ren into any unanswered questions?",
        name: "Application Questions",
    }
// What to do when I get the answers
]).then(function (response) {
    console.log(response)
        // Log answers
        // console.log answers
        fs.writeFile(response.name + ".json", JSON.stringify(response), function)
        if (err) {
            throw err
        }
        console.log()
    });





