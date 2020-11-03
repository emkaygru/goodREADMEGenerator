const fs = require('fs');
const inquire = require('inquirer');
const generateMarkdown = require('utils/generateMarkdown.js')
// const axios = require('axios');


// array of questions for user
const questions = [

    {
      type:'input',
      message:'What is your Github User Name? (No @ needed)',
      name:'username',
      default:'emquebuena',
      validate: function(answer){
        if(answer < 1){
           return console.log('Your username must be a valid Github username.');
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'What is the name of your Github Rep0?',
      name: 'repo',
      default: 'readme-generator',
      validate:function(answer){
        if(answer < 1){
          return console.log('A valid repo is required for license badge');
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'What is your Project\'s Title?',
      name: 'title',
      default: 'Project Title',
      validate: function(answer){
        if(answer < 5 ){
          return console.log('Your Project title must be longer than five characters');
        }
        return true;
      }

    },
    {
      type: 'input',
      message: 'Enter your project\'s description and contribution guidelines.',
      name: 'description',
      default: 'Project Decription',
      validate: function(answer){
        if(answer < 10){
          return console.log('Your project description must be longer than ten characters.');
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Enter your project\'s installation instructions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter your project\'s  usage information.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please describe your project\'s contribution guidelines.',
      name: 'guidelines',
    },
    {
      type: 'input',
      message: 'Please describe your project\'s test instructions.',
      name: 'testing',
    },
    {
      type: 'list',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
      name: 'license',
    },
    {

    }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, err => {
    if(err){
      return console.log(err);
    }
    return console.log('Success! Your README.md has been successfully created.')
  })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();