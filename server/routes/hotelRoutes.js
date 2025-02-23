import express from "express";
import { getAllHotelDetails, getTopHotelDetails, registerHotel } from "../controllers/hotelController.js";

const hotelRouter = express.Router()

hotelRouter.post('/register-hotel',registerHotel)

hotelRouter.get("/get-all-hotels", getAllHotelDetails)

hotelRouter.get("/get-top-hotels", getTopHotelDetails)

export default hotelRouter