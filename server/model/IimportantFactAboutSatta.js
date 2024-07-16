const mongoose = require("mongoose")

const SattaKingImportantFactSchema = new mongoose.Schema({
   importantFactSatta: String,
}, { timestamps: true })

const SattaKingImportantFact = mongoose.model("sattaKingImportantFact", SattaKingImportantFactSchema)
module.exports = SattaKingImportantFact;