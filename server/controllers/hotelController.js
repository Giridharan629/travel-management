import hotelModel from "../models/HotelModel.js"


export const registerHotel = async(req,res)=>{
    try {
        
        const {name, city, catagory, pricePerNight, description} = req.body
        
        if(!name){
            res.json({success:false, message:"Please enter Name"})
        }
        if(!city){
            res.json({success:false, message:"Please enter city"})
        }
        if(!catagory){
            res.json({success:false, message:"Please select catagory"})
        }
        if(!pricePerNight){
            res.json({success:false, message:"Please enter Price"})
        }
        if(!description){
            res.json({success:false, message:"Please enter Description"})
        }

        const hotel = new hotelModel({name, city, catagory, pricePerNight, description})

        await hotel.save()

        return res.json({success:true, message:"Request in queue"})

    } catch (error) {
        res.json({success:false, message:error.message})
        
    }
}

export const getAllHotelDetails = async (req,res)=>{
    try {

        const hotels = await hotelModel.find()

        if(hotels === 0){
            res.json({success:false, message:"Ther is some problem in fetching hotel details"})
        }else{
            return res.json({success:true, hotels:hotels})
        }
        
    } catch (error) {
        res.json({success:false, message:error.message})
        
    }
}

export const getTopHotelDetails = async (req,res)=>{
    try {

        const hotels = await hotelModel.find().sort({pricePerNight : -1})

        if(hotels.length === 0){
            res.json({success:false, message:"Ther is some problem in fetching hotel details"})
        }else{
            return res.json({success:true, hotels:hotels})
        }
        
    } catch (error) {
        res.json({success:false, message:error.message})
        
    }
}