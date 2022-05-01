import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@eventos.kdtxx.mongodb.net/eventos?");

let db = mongoose.connection;

export default db;
