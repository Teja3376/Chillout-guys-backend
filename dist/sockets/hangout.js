"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (io) => {
    io.on("connection", (socket) => {
        console.log("New client connected:", socket.id);
        socket.on("disconnect", () => {
            console.log("Client disconnected:", socket.id);
        });
        socket.on("joinRoom", (roomId) => {
            socket.join(roomId);
            console.log(`Socket ${socket.id} joined room ${roomId}`);
        });
        socket.on("webRTC-offer", (data) => {
            socket.to(data.roomId).emit("webRTC-offer", data);
        });
        socket.on("webRTC-answer", (data) => {
            socket.to(data.roomId).emit("webRTC-answer", data);
        });
        socket.on("webRTC-ice-candidate", (data) => {
            socket.to(data.roomId).emit("webRTC-ice-candidate", data);
        });
        socket.on("chat-message", (data) => {
            socket.to(data.roomId).emit("chat-message", data);
        });
        socket.on("typing", (data) => {
            socket.to(data.roomId).emit("typing", data);
        });
        socket.on("reaction", (data) => {
            socket.to(data.roomId).emit("reaction", data);
        });
    });
};
//# sourceMappingURL=hangout.js.map