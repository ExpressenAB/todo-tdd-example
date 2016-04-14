"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const storage = require("./lib/storage");

const app = express();
app.use(bodyParser.json());

app.post("/api/todo", (req, res) => {
  const id = storage.create(req.body)
  res.send({"id": id});
});

app.get("/api/todo", (req, res) => {
  res.send(storage.fetchAll());
});

const server = app.listen(3000, () => {
  console.log("Listening on port %d", server.address().port);
});

module.exports = app;
