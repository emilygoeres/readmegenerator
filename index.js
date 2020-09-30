// import NPM module you need

var inquirer = require("inquirer");
var fs = require('fs');
const Choices = require("inquirer/lib/objects/choices");

// Ask User Questions about their readMe file

inquiree.prompt([

    // Question 1
    {
        type:"input",
        message:"What is the TITLE of your project?",
        name:"Project Name"
    }
// Question 2
{
    type:"input",
    message:"What is the DESCRIPTION of your project?",
    name:"Project Description"
}
// Question 3
{
    type:"checkbox",
    message:"Please Add a Table of Contents",
    name:"Project Table of Contents"
    choices:["index.js", "package-lock.js", "package.json", "style.css" , "index.html", "images", "readMe"]
}
// Question 4
{
    type:"checkbox",
    message:"Did you install anything?",
    name:"Project Installations"
    choices:[""]
}
// Question 5
{
    type:"input",
    message:"What is the application used for?",
    name:"application usage"
}
// Question 6
{
    type:"input",
    message:"Does this application need a license?",
    name:"application license"
}
])








* License
* Contributing
* Tests
* Questions