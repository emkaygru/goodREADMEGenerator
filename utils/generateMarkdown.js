// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  let defaultTable = `## Table of Contents`;

  if(userResponses.installation !== '') {
    defaultTable += `* [Installation](#installation)`
  };

  if(userResponses.usage !== '') {
    defaultTable += `* [Usage](#usage)`
  };

  if(userResponses.contributing !== ''){
    defaultTable += `* [Contributing](#contributing)`
  };

  if(userResponses.tests !== ''){
    defaultTable += `* [Tests](#tests)`
  };


  return `
  # Project Title: ${userResponses.title}

  # Repo Name ${userResponses.repo}

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
  ${userResponses.installation}

  ## Usage
  ${userResponses.usage}

  ## Contribution
  ${userResponses.contributing}

  ## Testing
  ${userResponses.tests}


  ## License Agreement
  ${userResponses.license}




## Badges
 ![Github](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
 


 ## Author
 ![Github profile pic](${userInfo.avatar_url})

 ## Questions
 If you have any questions, contact me on Github: [@${userInfo.login}][${userInfo.url}]
`;


}

module.exports = generateMarkdown;