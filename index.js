const fs = require("fs");
const inquirer = require("inquirer");
const Circle = require("./lib/circle.js");
const Triangle = require("./lib/triangle.js");
const Square = require("./lib/square.js");

// Checks the logo text to make sure it is three characters or fewer
const confirmTextLength = (input) => {
    if (input.length <= 3) {
        return true;
    } else {
        return "Input is to large.";
    }
}
const questions = [
    {
        type: "input",
        name: "text",
        message: "What text do you want in the logo? (3 letter maximum)",
        validate: confirmTextLength
    },
    {
        type: "input",
        name: "textColor",
        message: "What color do you want the text to be? \nInput the name (ie. 'green') or hexcode (ie. #1eff00)"
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
        message: "What color do you want the shape to be? \nInput the name (ie. 'green') or hexcode (ie. #1eff00)"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('SVG successfully created!')
    );
}

inquirer.prompt(questions).then((response) => {
    var shape;
    if (response.shape == "circle") {
        shape = new Circle(response.shapeColor, response.text, response.textColor);
    } else if ((response.shape == "triangle")) {
        shape = new Triangle(response.shapeColor, response.text, response.textColor);
    } else {
        shape = new Square(response.shapeColor, response.text, response.textColor);
    }
    writeToFile("logo.svg", shape.getSVG());
});