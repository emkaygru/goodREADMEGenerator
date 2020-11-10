# goodREADMEGenerator
Homework for MSU Full-Stack Web Development Bootcamp
[App Demo](https://www.youtube.com/watch?v=BAfqLVWNdGE&feature=youtu.be)

When creating an open source project on GitHub, it is important to have a quality README with information about the app—what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README. 

This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project.

##  User Story 
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project

## Installation 
/Steps required to install project and how to get the development environment running:/
To generate your own README, first run npm install in order to install the following npm package dependencies as specified in the package.json:
*  [inquirer](https://www.npmjs.com/package/inquirer)  that will prompt you for your inputs from the command line
*  [axios](https://www.npmjs.com/package/axios)  to fetch your info from the GitHub API
The application itself can be invoked with node index.js.


## Usage 
When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project.

The application then takes your responses and uses axios to fetch your GitHub profile from the  [GitHub API](https://developer.github.com/v3/) , including your GitHub profile information. From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don’t answer the optional questions, such as Installation for example, an Installation section will not be included in your README). The README will also include badges for your GitHub repo. Fs.writeFile is used to generate your project’s README.md file. 