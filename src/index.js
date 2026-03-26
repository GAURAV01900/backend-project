import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

// since this connectdb function is asynchronous after completion it will return a promise which is
// to be handled
connectDB()
  .then(() => {
    const server = app.listen(process.env.PORT || 8000 , () => {
      console.log("app listening on port : ", process.env.PORT);
    });

    server.on("error" , (error)=>{
      console.log("ERR: ",error);
      process.exit(1);
    })
  })
  .catch((err) => {
    console.log("MONGODB connection failed : ", err);
    process.exit(1);
  });
