const validator = require('validator');
const {listNotes, addNote, removeNote, readNote} = require('./notes');
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
  handler(argv) {
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
  handle(argv) {
    removeNote(argv.title);
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder:{
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },  
  handler(argv) {
    readNote(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'List out all the notes',
  handler() {
    listNotes();
  }
});

yargs.parse();

// console.log(yargs.argv);