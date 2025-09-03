const noteModel = require("../models/noteModel.js");
const { sequelize } = require("../db/models");
const { Note } = sequelize.models;

async function getNotes(req, res) {
  const notes = await noteModel.getNotes(req.user.id);
  res.status(200).json(notes);
}

async function getNotesORM(req, res) {
  const notes = await Note.findAll();
  res.status(200).json(notes);
}

async function getNoteById(req, res) {
  const note = await noteModel.getNoteById(req.params.id);
  note
    ? res.status(200).json(note)
    : res.status(404).json({ error: "Unknown note id" });
}

async function addNote(req, res) {
  console.log(req.file.path);
  const newNote = await noteModel.addNote(req.body, req.user.id);
  res.status(201).json(newNote);
}

async function addNoteORM(req, res) {
  const { title, text } = req.body;

  const newNote = await Note.create({
    title,
    text,
    date: new Date(),
  });

  res.status(201).json(newNote);
}

module.exports = { getNotes, getNoteById, addNote, getNotesORM, addNoteORM };
