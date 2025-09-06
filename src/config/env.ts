import dotenv from 'dotenv';
dotenv.config();

// Server configuration
export const PORT = process.env.PORT || 3000;
// MongoDB connection URL
export const MONGODB_URL = process.env.MONGODB_URL || "";