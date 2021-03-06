// external javascript
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// internal javascript 
const generateMarkdown = require('./utils/generateMarkdown.js')
const api = require('./utils/githubapi.js');


// array of questions for user
const questions = [

  {
    type: 'input',
    message: 'What is your Github User Name? (No @ needed)',
    name: 'username',
    default: 'emkaygru',
    validate: function (answer) {
      if (answer < 1) {
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
    validate: function (answer) {
      if (answer < 1) {
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
    validate: function (answer) {
      if (answer < 5) {
        return console.log('Your Project title must be longer than five characters');
      }
      return true;
    }

  },
  {
    type: 'input',
    message: 'Enter your project\'s description and contribution guidelines.',
    name: 'description',
    default: 'Project Description',
    validate: function (answer) {
      if (answer < 10) {
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
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Please describe your project\'s test instructions.',
    name: 'testing',
  },
  {
    type: 'list',
    choices: [ "Apache",
    "MIT",
    "ISC",
    "GNU GPLv3"],
    name: 'license',
  }

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    return console.log('Success! Your README.md has been successfully created.')
  })
};

const asyncWriteFile = util.promisify(writeToFile);

// function to initialize program
async function init() {
  try {

    // inquirer questions 
    const userResponses = await inquirer.prompt(questions);
    console.log('Your Responses:', userResponses);
    console.log('Thank you! Fetching your Github data...');


    // github questions via API
    const userInfo = await api.getUser(userResponses);
    console.log('Your Github user information:', userInfo);

    // Inquirer user responses and User info saved to markdown
    console.log('Generating your README.md...');
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);

    // write file to markdown 
    await asyncWriteFile('README.md', markdown);

  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();