import { Router } from "express";
import Room from "../models/Room";

const router = Router();

// Create a new room
router.post('/', async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Room name is required" });
    }
    try {
        const newRoom = new Room({ name });
        await newRoom.save();
        console.log("Room created:", newRoom);
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ message: "Error creating room", error });
    }
})

// Get all rooms
router.get('/', async (req, res) => {
    const rooms = await Room.find().sort({ createdAt: -1 });
    console.log("Rooms fetched:", rooms.length);
    res.json(rooms);
});

export default router;