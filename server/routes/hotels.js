import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  filterHotels,
  getHotel,
  getHotelNames,
  getHotelRooms,
  getHotels,
  getHotelType,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.post("/filter-hotels", filterHotels);
router.get("/hotel-types", getHotelType);
router.post("/hotel-names", getHotelNames);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
