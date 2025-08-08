import mongoose from "mongoose";
import envConfig from "./config/envConfig.js";

const connectDB = async () => {
  try {
    const mongoURI = envConfig.DB.MONGO_URI;
    await mongoose.connect(mongoURI, {
      dbName: envConfig.DB.DB_NAME,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

export default connectDB;
