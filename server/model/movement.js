const mongoose=require("mongoose")

const MovementSchema=new mongoose.Schema({
   
    Movement:String
    
},{timestamps: true })

const Movement=mongoose.model("movement",MovementSchema)
module.exports=Movement;