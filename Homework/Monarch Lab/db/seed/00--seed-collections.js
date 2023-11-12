const mongoose = require("../connection.js");
const kingdomData = require("../data/kingdomRaw.json")
const monarchData = require("../data/monarchRaw.json")
const Kingdom = require("../../models/Kingdom.js")
const Monarch = require("../../models/Monarch.js")

const scrubbedKingdomData = kingdomData.map((kingdom) => ({
  title: kingdom.title,
  extract: kingdom.extract,
}));

const scrubbedMonarchData = monarchData.map((monarch) => ({
  name: monarch.name,
  house: monarch.house,
  start: monarch.start,
  end: monarch.end,
  endReason: monarch.endReason,
  kingdom: monarch.kingdom,
}));

async function seedData() {
  await Monarch.deleteMany({});
  await Kingdom.deleteMany({});

  await Monarch.create(scrubbedMonarchData);
  await Kingdom.create(scrubbedKingdomData);

  console.log("Kingdoms and Monarchs created!!");

  mongoose.disconnect();
}

seedData()