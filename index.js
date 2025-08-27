const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;
const notesRouter = require("./routes/noteRouter.js");
const { logger } = require("./middlewares/logger.js");
const { ValidationError } = require("ajv");

// Middleware that runs for every route
app.use(cors()); // adds CORS headers to every response
app.use(logger);
app.use(express.json()); // parsing JSON to body
app.use(express.static("public")); // opens access to public folder

// Routes
app.use("/notes", notesRouter);

// Running the server
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

// Home Route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// Demo Route
app.get("/demo", (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Query:", req.query);
  console.log("Params:", req.params);
  console.log("Body:", req.body); // Needs body parser
  res.send("Check console for request data");
});

// Error Handling Middleware (always in the END)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});
