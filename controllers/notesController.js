const noteModel = require("../models/noteModel.js");

async function getNotes(req, res) {
  const notes = await noteModel.getNotes();
  res.status(200).json(notes);
}

async function getNoteById(req, res) {
  const notes = await noteModel.getNotes();
  const note = notes.find((note) => note.id === req.params.id);
  note ? res.status(200).json(note) : res.status(404).json({error: "Unknown note id"});
}

function addNote(req, res) {
  res.status(201).json({ content: "Hello Create Notes!" });
}

module.exports = { getNotes, getNoteById, addNote };
