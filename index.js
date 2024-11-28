import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDb } from "../server/database/index.js"
import { DB_NAME } from "./constant.js";
import { app } from "./app.js"




dotenv.config({
    path: './env',
})
const PORT = 7000;
connectDb()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server Running on PORT ${process.env.PORT}`);
        })
    }).catch((err) => {
        console.log("Mongo db connecction failed", err)
    })

// app.listen(process.env.PORT, () => {
//     console.log(`App is running on PORT ${process.env.PORT}`);
// })