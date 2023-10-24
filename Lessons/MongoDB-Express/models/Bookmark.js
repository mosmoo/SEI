const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const bookmarkSchema = new Schema ({
    title:{
        type: String,
        trim:true
    },
    url:{
        type: String,
        trim:true
    }
})

module.exports = mongoose.model("Bookmark", bookmarkSchema);
