const Schema = mongoose.Schema

const penpalsSchema = new Schema ({
    to:{
        type: String,
        required: true,
        trim:true
    },
    from:{
        type: String,
        required: true,
        trim:true
    },
    message:{
        type: String,
        required: true,
        trim:true
    },
    sentOn:{
        timestamps: true,
    }
})
module.exports = mongoose.model("Penpals", penpalsSchema);