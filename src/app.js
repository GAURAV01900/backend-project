import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//confirguring the app
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

//configure and set middleware
app.use(express.json({limit:"20kb"}))// form data
app.use(express.urlencoded({extended: true , limit: "20kb"})) //url data
app.use(express.static("public")) // to serve public files requested from public folder to server
app.use(cookieParser())

//routes import

import userRouter from './routes/user.routes.js'



//routes declaration

app.use("/api/v1/users" , userRouter)

export { app }