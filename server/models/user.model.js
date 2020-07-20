const mongoose = require("mongoose")
const Schema = mongoose.Schema

const clientSchema = new Schema({
    photo: {
        type: String,
    },
    memberNumber: {
        type: String
    },

    name: {
        type: String
    },
    surname: {
        type: String
    },
    sex: {
        type: String
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

    
    ownerId: { type: Schema.Types.ObjectId },
},{
    timestamps: true
})

const Client = mongoose.model("Client", clientSchema)

module.exports = Client