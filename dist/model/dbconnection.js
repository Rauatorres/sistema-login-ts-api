"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const senha = process.env.DB_PASSWORD;
const client = new mongodb_1.MongoClient(`mongodb+srv://rauatorres:${senha}@main.msywlmw.mongodb.net/?retryWrites=true&w=majority&appName=main`);
exports.default = client;
