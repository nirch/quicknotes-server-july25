const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const { noteSchema } = require("../data/noteSchema");

const ajv = new Ajv();
addFormats(ajv);
const validateNote = ajv.compile(noteSchema);

function noteValidation(req, res, next) {
  console.log("noteValidation");
  const valid = validateNote(req.body);
  if (valid) {
    next();
  } else {
    console.log(validateNote.errors);
    const error = new Error("Note validation error");
    error.status = 400;
    error.message = validateNote.errors[0].message;
    next(error);
  }
}

module.exports = { noteValidation };
