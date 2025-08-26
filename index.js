const express = require("express");
const app = express();
const PORT = 8080;

// Middleware that parses JSON for every route
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/notes", (req, res) => {
  res.status(200).send("Hello Notes!");
});

app.post("/notes", (req, res) => {
  res.status(201).json({content: "Hello Create Notes!"});
});

app.get("/notes/:id", (req, res) => {
  res.status(200).json({id: req.params.id, content: "Hello Get Specific Note"});
});

// Multiple Routes Params
// app.get("/post/:postId/comments/:commentId", (req, res) => {
// });




app.get("/demo", (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Query:", req.query);
  console.log("Params:", req.params);
  console.log("Body:", req.body); // Needs body parser
  res.send("Check console for request data");
});

// Running the server
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
