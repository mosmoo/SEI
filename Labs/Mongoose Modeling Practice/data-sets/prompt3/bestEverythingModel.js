const Schema = mongoose.Schema

const bestEverythingSchema = new Schema ({
   year:{
        type: number,
    },
    sports:[{
        superBowl:{
        type: String,
        trim:true
        },
        worldSeries:{
            type: String,
            trim:true
        },
        stanleyCup:{
            type: String,
            trim:true
        },
        NBAchampionship:{
            type: String,
            trim:true
        }
    }],
    music:[{
        bestSong:[{
            title:{
                type: String,
                trim:true
            },
            artist:{
                type: String,
                trim:true
            }
        }],
    movies:[{
        bestMovie:{
            type: String,
            trim:true
        },
        bestActress:{
            type: String,
            trim:true
        },
        bestActor:{
            type: String,
            trim:true
        }
    }]
    }],
})
module.exports = mongoose.model("best-everything", bestEverythingSchema);