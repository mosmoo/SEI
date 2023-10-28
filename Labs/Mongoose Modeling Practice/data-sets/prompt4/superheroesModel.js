const Schema = mongoose.Schema

const superHeroesSchema = new Schema ({
   universe:{
        type: string,
        trim:true
    },
    movies:[{
        title:{
        type: String,
        trim:true
        },
        year:{
            type: Number,
        },
        characters:[{
            name:{
                type: String,
                trim:true
            },
            alias:{
                type: String,
                trim:true
            },
            actor:{
                type: String,
                trim:true
            }
        }
        [{
            name:{
                type: String,
                trim:true
            },
            alias:{
                type: String,
                trim:true
            },
            actor:{
                type: String,
                trim:true
            }
        }]],
      
}]
})
module.exports = mongoose.model("superHeroes", superHeroesSchema);