const validator = require('validator');
const notes = require('./notes');
const chalk = require('chalk');

// console.log(notes());
// console.log(validator.isEmail('danielalexvega@gmail.com'));
// console.log(validator.isURL('http://www.danielalexvega.com'));

console.log(chalk.bold.bgBlue.underline.white('Success!'));
console.log(chalk.bold.bgRed.underline.black('Success!'));