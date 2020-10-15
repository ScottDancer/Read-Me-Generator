const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// array of questions for user
const questions = [
  {
    type:"input",
    name:"title",
    message:"What is your projects title?"
  },
  {
    type:"input",
    name:"github",
    message:"What is your github username?",
    // default:"ScottDancer"
  },
  {
    type:"input",
    name:"email",
    message:"What is your email?",
    // default:"scottpdancer@gmail.com"
  },
  {
    type:"input",
    name:"description",
    message:"What is the description of the project?"
  },
  {
    type:"list",
    name:"license",
    message:"What license does your project have",
    choices:[
      {name: "MIT", value: "MIT"}, 
      {name: "APACHE 2.0", value: "APACHE-2.0"},
      {name: "GPL 3.0", value: "GPL-3.0"}, 
      {name: "None", value: "None"}
    ] 
  },
  {
    type:"input",
    name:"install",
    message:"Command to install project",
    default: "npm install"
  },
  {
    type:"input",
    name:"test",
    message:"Command to test project",
    default: "npm test"
  },
  {
    type:"input",
    name:"usage",
    message:"What does the user need to know about using this project"
  },
  {
    type:"input",
    name:"contribute",
    message:"What does the user need to know about contributing to this project"
  }
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(__dirname,fileName),data)
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(data=>{
      console.log(data)
      console.log("generate Read Me")
      writeToFile("README.md",generateMarkdown(data))
    })
}

// function call to initialize program
init();
