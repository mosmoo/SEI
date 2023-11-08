import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Cat = new Schema({
  name: { type: String },
  aka: { type: String },
  bio: { type: String },
  age: { type: Number },
  gender: { type: String },
  species: { type: String },
  likesCuddles: { type: Boolean },
  image: { type: String },
});

export default mongoose.model("cats", Cat);
