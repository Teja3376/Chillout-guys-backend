"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const mongo_1 = require("./mongo");
const env_1 = require("./config/env");
const hangout_1 = __importDefault(require("./sockets/hangout"));
const room_1 = __importDefault(require("./routes/room"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
    }
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/rooms', room_1.default);
(0, hangout_1.default)(io);
(0, mongo_1.connectToDatabase)();
server.listen(env_1.PORT, () => {
    console.log(`Server is running on port ${env_1.PORT}`);
});
//# sourceMappingURL=index.js.map