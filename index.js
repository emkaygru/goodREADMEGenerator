const fs = require('fs');
const inquire = require('inquirer');
const generateMarkdown = require('utils/generateMarkdown.js')
const axios = require('axios');


const githubAPI = {
  async getUser(userResponses) {
    try {
      // sample url: https://api.github.com/users/emkaygru
      let response = await axios.get(`https://api.github.com/users/${userResponses.username}`);

      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = githubAPI;



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
    default: 'Project Decription',
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
  }

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, err => {
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

    const userResponses = await inquirer.prompt(questions);
    console.log('Your Responses', userResponses);
    console.log('Thank you! Fetching your Github data...');

    const userInfo = await api.getUser(userResponses);
    console.log('Your Github user information:', userInfo);

    console.log('Generating your README.md...');
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);

    console.log(markdown);

    await asyncWriteFile('README.md', markdown);

  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();