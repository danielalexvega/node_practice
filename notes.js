const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
}

const saveNotes = (notesArr) => {
  const dataJSON = JSON.stringify(notesArr);
  fs.writeFileSync('notes.json', dataJSON);
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log('New note added');
  } else {
    console.log('Note title taken!');
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter(note => note.title !== title);
  if (updatedNotes.length !== notes.length) {
    console.log(chalk.bgGreen.white(`Removed note with title: ${title}`));
    saveNotes(updatedNotes);
  } else {
    console.log(chalk.bgRed.white('That note title does not exist'));
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};