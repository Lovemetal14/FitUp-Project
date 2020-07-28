const mongoose = require("mongoose")
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    name: {
        type:String,
    },
    sets: {
        type: String
    },
    reps: {
        type: Number
    },
    photo: {
        type: String,
    },
  
    // ownerId: { type: Schema.Types.ObjectId },
},{
    timestamps: true
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise