import mongoose from "mongoose";
import express, { json } from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import { sizelimit } from "./constants";

//use keywords is used when we are working with a middleware.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//limit property defines the size of maximum data sent to the server.
app.use(express.json({limit:sizelimit}));

//url encoded is used to define the pattern of the url.
//extended property is used to make nested objects.
app.use(express.urlencoded({extended:true, limit:sizelimit}));

//This statement is for the public assets like favicon etc.
app.use(express.static("public"));
app.use(cookieParser())

app.use(express.json({limit: "20kb"}))
const app = async () => {

}

export {app};
//export default app;

