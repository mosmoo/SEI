const Bookmark = require("../models/Bookmark");
const bookmarks = require("./bookmarks.json");

Bookmark.deleteMany({}).then(() => {
  Bookmark.create(bookmarks).then(bookmarks => {
    console.log(bookmarks);
    process.exit();
  });
});