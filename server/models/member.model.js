const mongoose = require("mongoose")
const Schema = mongoose.Schema

const memberSchema = new Schema({
    photo: {
        type: String,
    },
    username: {
        type:String,
    },
    password: {
        type:String
    },
    memberNumber: {
        type: String,
    }
    ,
    favourite_routines: [{type: Schema.Types.ObjectId, ref: 'Routine' }],
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

const Member = mongoose.model('Member', memberSchema)

module.exports = Member