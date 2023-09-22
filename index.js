const inquirer = require ('inquirer')
const {writeFile} = require ('fs/promises');
const {Shape ,Circle, Square, Triangle } = require('./lib/shapes');
const generateLogo = require('./lib/generateLogo')

const prompt = inquirer.createPromptModule() 

prompt([
    {
        type: "input",
        message: "Enter up to 3 characters for your logo text:",
        name: "text",
        validate: function (answer) {
          if (answer.length > 3) {
            return console.log(" Logo text must be 3 or less characters long.");
          }
          return true;
        }
    },
    {
        type: "input",
        message: "Enter a text color by name or hexadecimal number:",
        name: "textColor",
    },
    {
        type: "list",
        message: "Choose a shape for the logo:",
        name: "shape",
        choices: [
            {name: "circle", value: "circle"},
            {name: "triangle", value: "triangle"},
            {name: "square", value: "square"},
        ],
    },
    {
        type: "input",
        message: "Enter a shape color by name or hexadecimal number:",
        name: "shapeColor",
    },

])
.then((answers) => {
    let shapeChoice;
    if (answers.shape === "circle") {
        shapeChoice = new Circle(answers.shapeColor)
    } else if (answers.shape === "square") {
        shapeChoice = new Square(answers.shapeColor)
    } else if (answers.shape === "triangle") {
        shapeChoice = new Triangle(answers.shapeColor)
    }
    const svg = generateLogo(answers.text, answers.textColor, shapeChoice)
    return writeFile('./examples/logo.svg', svg)
})
.then(()=> console.log('Generated logo.svg'))

