const noteModel = require("../models/noteModel.js")

async function getNotes(req, res) {
  const notes = await noteModel.getNotes();
  res.status(200).json(notes);
}

function getNoteById(req, res) {
  res
    .status(200)
    .json({ id: req.params.id, content: "Hello Get Specific Note" });
}

function addNote(req, res) {
  res.status(201).json({ content: "Hello Create Notes!" });
}

module.exports = { getNotes, getNoteById, addNote };
