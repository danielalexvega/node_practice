const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgBlue.white('Your notes'));
  notes.forEach(note => {
    console.log(`${chalk.underline(note.title)}: ${note.body}`);
  });
}

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
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
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

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if(note !== undefined) {
    console.log(chalk.bgYellow.black(note.title));
    console.log(chalk.yellow(note.body));
  } else {
    console.log(chalk.bgRed.white("No note found."));
  }
}

module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote
};