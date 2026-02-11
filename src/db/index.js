import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//use try catch for error and async await since db is in another continent
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
  } catch (error) {
    console.error("MongoDb connection Failed ", error);
    process.exit(1);
  }
};

export default connectDB;