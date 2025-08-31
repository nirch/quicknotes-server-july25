const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;
const notesRouter = require("./routes/noteRouter.js");
const { logger } = require("./middlewares/logger.js");
const { sequelize } = require("./db/models/index.js");

// Middleware that runs for every route
app.use(cors()); // adds CORS headers to every response
app.use(logger);
app.use(express.json()); // parsing JSON to body
app.use(express.static("public")); // opens access to public folder

// Routes
app.use("/notes", notesRouter);


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to database:', error);
  }
}

// Running the server
app.listen(PORT, async () => {
  console.log("Server is listening on port " + PORT);
  await testConnection();
});

// Home Route
app.get("/", async (req, res) => {
  const [results, metadata] = await sequelize.query("SELECT * FROM test_connection");
  console.log(results);
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
