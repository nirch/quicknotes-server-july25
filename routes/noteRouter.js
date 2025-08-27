const express = require("express");
const { getNotes, addNote, getNoteById } = require("../controllers/notesController");
const { noteValidation } = require("../middlewares/noteValidation");

const router = express.Router();

router.get("/", getNotes);
router.post("/", noteValidation, addNote);
router.get("/:id", getNoteById);

module.exports = router;