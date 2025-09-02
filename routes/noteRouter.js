const express = require("express");
const { getNotes, addNote, getNoteById, getNotesORM, addNoteORM } = require("../controllers/notesController");
const { noteValidation } = require("../middlewares/noteValidation");
const { authenticate } = require("../middlewares/authenticate");


const router = express.Router();
// router.use(authenticate);

router.get("/", authenticate, getNotes);
router.get("/orm", getNotesORM);

router.post("/", noteValidation, addNote);
router.post("/orm", noteValidation, addNoteORM);

router.get("/:id", getNoteById);

// router.post("/", noteValidation, addNote);
// router.get("/:id", getNoteById);


module.exports = router;