const noteModel = require("../models/noteModel.js");

async function getNotes(req, res) {
  const notes = await noteModel.getNotes();
  res.status(200).json(notes);
}

async function getNoteById(req, res) {
  const note = await noteModel.getNoteById(req.params.id)
  note ? res.status(200).json(note) : res.status(404).json({error: "Unknown note id"});
}

async function addNote(req, res) {
  const newNote = await noteModel.addNote(req.body);
  res.status(201).json(newNote);
}

module.exports = { getNotes, getNoteById, addNote };
