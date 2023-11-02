import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    unique: true,
  },
  genre: {
    type: String,
    enum: [
        "Pop",
        "Rock",
        "Blues",
        "Hip Hop",
        "Jazz",
        "Folk",
        "Country",
        "Classical",
        "Rap"
      ]
  },
  songs:[{
    title: {
        type: String,
        required:true,
        unique:true
    },
    album: {
        type: String,  
    },
    length:{
        type:Number,
        min: 1
    }
  }]
});

export default ArtistSchema;
