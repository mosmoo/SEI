const mongoose = require("../connection.js");
const Kingdom = require("../../models/Kingdom.js")
const Monarch = require("../../models/Monarch.js")

async function updateMonarch() {
  const kingdoms = await Kingdom.find({});

  kingdoms.forEach(async (kingdom) => {
    await Monarch.updateMany(
      { kingdom: kingdom.title },
      { $set: { kingdom: kingdom } }
    );
  });

  console.log("Monarchs updated!");
}

updateMonarch(); 