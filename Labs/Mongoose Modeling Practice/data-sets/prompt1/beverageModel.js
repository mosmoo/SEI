const Schema = mongoose.Schema

const beverageSchema = new Schema ({
    'beverage-name':{
        type: String,
        required: true,
        trim:true
    },
    brand:{
        type: String,
        required: true,
        trim:true
    },
    "beverage-type":{
        type: String,
        required: true,
        trim:true
    },
    "contains-sugar":{
        type: Boolean,
        required: true
    },
    carbonated:{
        type: Boolean,
        required: true
    },
    container:{
        type: String,
        required: true,
        trim:true
    }
})
module.exports = mongoose.model("Beverage", beverageSchema);
