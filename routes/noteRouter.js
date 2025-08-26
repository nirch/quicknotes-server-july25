const express = require("express");
const { getNotes, addNote, getNoteById } = require("../controllers/notesController");

const router = express.Router();

router.get("/", getNotes);
router.post("/", addNote);
router.get("/:id", getNoteById);

module.exports = router;