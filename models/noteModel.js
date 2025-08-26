const fs = require("fs");

async function getNotes() {
  const data = await fs.promises.readFile("./data/notes.json");
  return JSON.parse(data);
}

async function getNoteById(id) {
  const notes = await getNotes();
  const note = notes.find((note) => note.id === id);
  return note;
}

module.exports = { getNotes, getNoteById };
