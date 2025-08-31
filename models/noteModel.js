const fs = require("fs");
const { nanoid } = require("nanoid");
const { sequelize } = require("../db/models/index.js");

async function getNotes() {
  const [results, metadata] = await sequelize.query("SELECT * FROM notes");
  return results;
}

async function getNoteById(id) {
  const query = `
  SELECT *
  FROM notes
  WHERE id=:id
  `;
  const [results, metadata] = await sequelize.query(query, {
    replacements: { id },
  });
  return results[0];
}

async function addNote(newNote) {
  const query = `
  INSERT INTO notes (title, text, date)
  VALUES (:title, :text, NOW())
`;

  const [createdId] = await sequelize.query(query, {
    replacements: { title: newNote.title, text: newNote.text },
  });

  return getNoteById(createdId);
}

module.exports = { getNotes, getNoteById, addNote };
