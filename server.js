const express = require('express');
const app = express();
const PORT = 5000;

const fs = require('fs');
const path = require('path');
const engine = require("consolidate");

// middleware to enable SharedBuffer to be used
app.use(function(req, res, next) {
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
});


app.use(express.static(path.join(__dirname, "public")))
.set("views", path.join(__dirname, "views"))
.engine("html", engine.mustache)
.set("view engine", "html")
.get("/", (req, res) => res.render("index.html"))
.get("/index.html", (req, res) => res.render("index.html"))
.listen(PORT, () => {
  console.log(`FFmpeg App is listening on port ${PORT}!`)
  require("openurl").open(`http://localhost:${PORT}`)
});