const mongoose = require("mongoose")
const Schema = mongoose.Schema

const routineSchema = new Schema({

    type: {
        type: String,
        enum: ["loseFat", "gainMuscle", "bootyWork", "beachWork"]
    },
    exercises: [{
        num: 20,
        weight: 0,
        sets: 3,
        rest: 60
    }, {
        num: 19,
        weight: 0,
        sets: 3,
        rest: 60
    }, {
        num: 7,
        weight: 0,
        sets: 3,
        rest: 60
    }, {
        num: 17,
        weight: 0,
        sets: 3,
        rest: 60
    }, {
        num: 16,
        weight: 0,
        sets: 3,
        rest: 60
    }, {
        num: 28,
        weight: 0,
        sets: 3,
        rest: 60
    }, {
        num: 15,
        weight: 0,
        sets: 3,
        rest: 60
    }, {
        num: 23,
        weight: 0,
        sets: 3,
        rest: 60
    }],

    author: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
   

},{
    timestamps: true
})

const Routine = mongoose.model("Routine", routineSchema)

module.exports = Routine

// chest.Number
// "3 sets, 12 reps, 40 kg, tiempo descanso"