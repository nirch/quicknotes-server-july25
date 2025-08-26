const fs = require("fs");

async function getNotes() {
  const data = await fs.promises.readFile("./data/notes.json");
  return JSON.parse(data);
}

module.exports = { getNotes };
