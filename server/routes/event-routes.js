import express from "express";
import {
  getAllEvents,
  getSingleEvent,
  createEvent,
} from "../controllers/event-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import upload from "../middlewares/upload-cloudinary.js";

const router = express.Router();

// Routers
router.get("/event", getAllEvents);
router.get("/event/:id", getSingleEvent);

router.post("/create", authMiddleware, upload.single("image"), createEvent);

export default router;
