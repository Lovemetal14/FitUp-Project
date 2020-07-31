const mongoose = require("mongoose")
const Schema = mongoose.Schema

const routineSchema = new Schema({
    title: {
        type: String,
    },
    type: {
        type: String,
        enum: ["Perdida grasa", "Ganar músculo", "Especial Gluteo", "Especial Playa"]
    },
    muscleGroup: {
        type: String,
        enum: ["Pectoral", "Hombros", "Espalda", "Biceps", "Triceps", "Cuadriceps", "Femoral", "Gemelo", "Gluteo"]
    },

    author: { type: Schema.Types.ObjectId },
    
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],

}, {
    timestamps: true
})

const Routine = mongoose.model("Routine", routineSchema)

module.exports = Routine

