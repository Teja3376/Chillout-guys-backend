"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URL = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Server configuration
exports.PORT = process.env.PORT || 3000;
// MongoDB connection URL
exports.MONGODB_URL = process.env.MONGODB_URL || "";
//# sourceMappingURL=env.js.map