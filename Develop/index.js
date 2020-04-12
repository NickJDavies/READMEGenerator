const axios = require("axios")
const inquirer = require("inquirer")



inquirer
  .prompt([{
    name: "username",
    message: "Enter your GitHub username"
  },
  {
    name: "repository",
    message: "Enter your repositories name"
  }]).then(function(response) {
    console.log(response);
    // const queryUrl = `https://api.github.com/users/${username}`;
    // axios.get(queryUrl).then( (response) => {
    //   const email = response.data.email;
    //   const name = response.data.name;
    // })
  });

function writeToFile(fileName, data) {
}

function init() {
}