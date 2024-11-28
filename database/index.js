import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("MongoDb connection successfully")
    } catch (error) {
        console.log("MONGODB Connection failed", error)
    }
}

export { connectDb };


// app.get('/', (req, res) => {
//     res.send("api is created")
// })