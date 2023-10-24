const express = require("express");
const app = express();
const Bookmark = require("./models/Bookmark.js");

app.get("/", function(req, res) {
  Bookmark.find({}).then(bookmarks => res.json(bookmarks));
});

app.listen(3000, () => console.log("Listening on port 3000"));