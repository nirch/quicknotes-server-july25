const cloudinary = require("cloudinary").v2;
const { sequelize } = require("../db/models/index.js");
const fs = require("fs");

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

async function addNote(newNote, userId, file) {
  try {
    const uploadResult = await cloudinary.uploader.upload(file.path);

    const query = `
  INSERT INTO notes (title, text, date, userId, imageURL)
  VALUES (:title, :text, NOW(), :userId, :imageURL)
`;

    const [createdId] = await sequelize.query(query, {
      replacements: {
        title: newNote.title,
        text: newNote.text,
        userId,
        imageURL: uploadResult ? uploadResult.url : null,
      },
    });

    return getNoteById(createdId);
  } finally {
    file && fs.promises.unlink(file.path);
  }
}

module.exports = { getNotes, getNoteById, addNote };
