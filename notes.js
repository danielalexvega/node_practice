const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');
const fs = require('fs');

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

  if(duplicateNotes.length === 0) {
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

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};