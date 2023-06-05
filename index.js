const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "text",
        message: "What text do you want in the logo? (3 letter maximum)",
        // Is this right?
        validate: (ans) => {
            if (ans.length <= 3) {
                return true;
            } else {
                return "Input is to large.";
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "What color do yuo want the text to be? \nInput the name (ie. 'green') or hexcode (ie. #1eff00)"
    },
    {
        type: "list",
        name: "shape",
        message: "What shaape do you want to use?",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color do yuo want the shape to be? \nInput the name (ie. 'green') or hexcode (ie. #1eff00)"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README successfully created!')
    );
}

inquirer.prompt(questions).then((response) => {
    // TODO: write the file
});