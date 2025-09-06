import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { connectToDatabase } from "./mongo";
import { PORT } from "./config/env";
import hangoutSocket from "./sockets/hangout";
import roomRoutes from "./routes/room";


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});


app.use(cors());
app.use(express.json());

app.use('/api/rooms', roomRoutes);


hangoutSocket(io);


connectToDatabase();

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});