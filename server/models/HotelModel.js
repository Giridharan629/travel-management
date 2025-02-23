import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
    name:{type:String, required:true},
    city:{type: String, required:true},
    catagory:{
        type:String,
        enum:["Luxury", "Heritage Luxury","Modern Luxury", "Traditional Luxury"],
        required:true
    },
    pricePerNight:{type:Number, required:true},
    description:{type:String, required:true},
    isVerified:{type:Boolean, default:false}
})

const hotelModel = mongoose.models.hotels || mongoose.model("hotels",hotelSchema)


export default hotelModel;