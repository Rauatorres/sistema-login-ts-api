import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const senha = process.env.DB_PASSWORD;

const client = new MongoClient(`mongodb+srv://rauatorres:${senha}@main.msywlmw.mongodb.net/?retryWrites=true&w=majority&appName=main`);

export default client;