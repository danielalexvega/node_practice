const validator = require('validator');
const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

// add, remove, read, list

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => {
    console.log('Removing a note!');
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => {
    console.log('Reading a note!');
  }
});

yargs.command({
  command: 'list',
  describe: 'List out all the notes',
  handler: () => {
    console.log('Listing out all the notes');
  }
});

yargs.parse();

// console.log(yargs.argv);