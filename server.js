import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

const Port = process.env.PORT || 5000;
mongoose.connect('mongodb+srv://Avinash:Avinash0123@cluster0.mh2w6.mongodb.net/')
    .then(() => {
        console.log('MongoDB Connected')
    }).catch((error) => console.log(error));


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
    ],
    credentials: true
}))

app.use(cookieParser());
app.use(express.json())
//server is running on port
app.listen(Port, () => {
    console.log(`Server is running on ${Port}`);
})





