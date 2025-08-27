const noteSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    text: { type: "string", maxLength: 500 },
    date: { type: "string", format: "date-time" },
    title: { type: "string", maxLength: 30 },
  },
  required: ["text", "title"],
  additionalProperties: false,
};

module.exports = { noteSchema };
