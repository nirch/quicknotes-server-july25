function getNotes(req, res) {
  res.status(200).send("Hello Notes!");
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
