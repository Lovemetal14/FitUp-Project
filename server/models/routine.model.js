const mongoose = require("mongoose")
const Schema = mongoose.Schema

const routineSchema = new Schema({
    photo: {
        type: String,
    },
    userNumber: {
        type: String
    },

    type: {
        enum [loseweight, gainweight, ]
        type: String
    },
    exercises: {
        []
        type: String
    },
    sex: {
        type: String
    },
    weight: {
        type: Number
    },
    author: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
   

},{
    timestamps: true
})

const Routine = mongoose.model("Routine", routineSchema)

module.exports = Routine

// chest.Number
// "3 sets, 12 reps, 40 kg, tiempo descanso"