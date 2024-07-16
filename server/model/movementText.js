const mongoose = require("mongoose")

const movementSchema = new mongoose.Schema({

    Movement: String,
    validation:{
        type:Boolean,
        default:false
    }



}, { timestamps: true })

const Movement = mongoose.model("movementSchema", movementSchema)
module.exports = Movement;