const mongoose = require("mongoose");

const monarchSchema = new mongoose.Schema({
  name: String,
  house: String,
  start: String,
  end: String,
  endReason: String,
  kingdom: Object,
});

module.exports = mongoose.model("monarchs", monarchSchema); 