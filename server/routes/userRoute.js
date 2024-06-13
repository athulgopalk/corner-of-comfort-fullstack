import express from "express";
import asyncHandler from "express-async-handler";
import {
  createUser,
  bookVisit,
  getAllBookings,
  cancelBooking,
  toFav,
  getAllFavorites,
} from "../controllers/userCntrl.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

// Route to register a user
router.post("/register", jwtCheck, createUser);

// Route to book a visit
router.post("/bookVisit/:id", jwtCheck, bookVisit);

// Route to get all bookings
router.post("/allBookings", jwtCheck, getAllBookings);

// Route to cancel a booking
router.post("/removeBooking/:id", jwtCheck, cancelBooking);

// Route to add to favorites
router.post("/toFav/:rid", jwtCheck, toFav);

// Route to get all favorites
router.post("/allFav/", jwtCheck, getAllFavorites);

export { router as userRoute };
