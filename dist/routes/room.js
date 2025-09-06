"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Room_1 = __importDefault(require("../models/Room"));
const router = (0, express_1.Router)();
// Create a new room
router.post('/', async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Room name is required" });
    }
    try {
        const newRoom = new Room_1.default({ name });
        await newRoom.save();
        console.log("Room created:", newRoom);
        res.status(201).json(newRoom);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating room", error });
    }
});
// Get all rooms
router.get('/', async (req, res) => {
    const rooms = await Room_1.default.find().sort({ createdAt: -1 });
    console.log("Rooms fetched:", rooms.length);
    res.json(rooms);
});
exports.default = router;
//# sourceMappingURL=room.js.map