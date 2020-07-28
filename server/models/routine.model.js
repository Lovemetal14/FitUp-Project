const mongoose = require("mongoose")
const Schema = mongoose.Schema

const routineSchema = new Schema({
    title:{
        type: String,
    },
    type: {
        type: String,
        enum: ["loseFat", "gainMuscle", "bootyWork", "beachWork"]
    },
    muscleGroup: {
        type: String,
        enum: ["Chest", "Shoulders", "Back", "Biceps", "Triceps", "Cuadriceps", "Hams", "Calves"]
    },
    
    author: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
   

},{
    timestamps: true
})

const Routine = mongoose.model("Routine", routineSchema)

module.exports = Routine

// exercises: [{
//     type: Array,
//     num: 0,
//     weight: 0,
//     sets: 0,
//     rest: 0
// },
// ],