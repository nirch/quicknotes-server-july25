const { sequelize } = require("../db/models/index.js");

async function getNotes(userId) {
  const [results, metadata] = await sequelize.query(
    "SELECT * FROM notes WHERE userId=:userId",
    { replacements: { userId } }
  );
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

async function addNote(newNote, userId) {
  const query = `
  INSERT INTO notes (title, text, date, userId)
  VALUES (:title, :text, NOW(), :userId)
`;

  const [createdId] = await sequelize.query(query, {
    replacements: { title: newNote.title, text: newNote.text, userId },
  });

  return getNoteById(createdId);
}

module.exports = { getNotes, getNoteById, addNote };
