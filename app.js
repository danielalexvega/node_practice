const validator = require('validator');
const {getNotes, addNote, removeNote} = require('./notes');
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
    addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder:{
    title: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },  
  handler: (argv) => {
    removeNote(argv.title);
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