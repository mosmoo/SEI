import mongoose from 'mongoose'

const Schema = mongoose.Schema

let CharacterSchema = new Schema({
  name: { type: String },
  age: { type: String },
  village: { type: String },
  occupation: { type: String },
  jutsu: [{ type: String }]
});

export default mongoose.model("characters", CharacterSchema);