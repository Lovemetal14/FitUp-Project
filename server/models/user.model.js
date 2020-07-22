const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    photo: {
        type: String,
    },
    memberNumber: {
        type: String,
    },
    role: {
        type: String,
        enum: ["Client", "Trainer"]
   
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    dateOfBirth: {
        type: String,
        default: ""
    },   
    country: {
        type: String
    },

  
    // ownerId: { type: Schema.Types.ObjectId },
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User