import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const connectdb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected!");
    } catch (error) {
        console.log("DB connection error!",error);
    }
}

export {connectdb}
