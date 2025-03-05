import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json({ success:true ,newhotel:savedHotel});
  } catch (err) {
    next(err);
  }
};
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};


export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find().limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};


export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "Apartment" });
    const resortCount = await Hotel.countDocuments({ type: "Resort" });
    const villaCount = await Hotel.countDocuments({ type: "Villa" });
    const motelCount = await Hotel.countDocuments({ type: "Motel" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "motel", count: motelCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelNames = async (req, res)=>{
  const {city} = req.body;

  try {

      if(!city){
          return
      }

      const hotels = await Hotel.find({city: {$regex:city, $options:"i"}})

      if(hotels.length === 0){
          return res.json({success:false, message:"No matches found"})
      }else{
          return res.json({success: true, hotels: hotels})
      }
      
  } catch (error) {

      return res.json({success:false, message:error.message})
      
  }
}

export const getHotelType = async (req, res)=>{

  try {

      const catagory = await Hotel.distinct("type")

      if(catagory.length === 0){
          return res.json({success:false})
      }else{
          return res.json({success: true, catagory: catagory})
      }
      
  } catch (error) {

      return res.json({success:false, message:error.message})
      
  }
}

export const filterHotels = async(req,res)=>{
  const {city, type, range} = req.body;

  
  try {

      
      const query = {}
      
      if(range){
        cheapestPrice:{$lte:range}
      }

      if(city){
        query.city = { $regex: city, $options: "i" };
          // query.city.$options = "i"
      }
      if(type){
          query.type = { $regex: type, $options: "i" };
      }

      if(!range && !city && !type){
        return
      }


      const hotels = await Hotel.find(query).sort({cheapestPrice:1})

      if(hotels.length === 0){
          return res.json({success:false,message:"No matches found"})
      }else{
          return res.json({success:true, hotels: hotels})
      }
      
  } catch (error) {

      return res.json({success:false, message:error.message})
      
  }

}


export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
