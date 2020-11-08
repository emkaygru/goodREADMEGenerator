// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {


  return `
  # Project Title: ${userResponses.title}

  ## Project Description: ${userResponses.description}

  ## Table of Contents: 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  * [License](#license)
  * [Author](#author)
  * [Badges](#badges)
  

  ## Installation
  ${userResponses.install}

  ## Usage
  ${userResponses.usage}

  ## Contribution
  ${userResponses.contributing}

  ## Testing
  ${userResponses.tests}

  ## Questions
  If you have any questions, contact me on Github: [@${userInfo.login}][${userInfo.url}]

  ## License Agreement
  ${userResponses.license}


## Author
![Github profile pic](${userInfo.avatar_url})

## Badges
![badmath](https://img.shields.io/github/repo-size/${userInfo.useame}/${data.repo})

`;


}

module.exports = generateMarkdown;