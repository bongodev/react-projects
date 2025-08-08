import dotenv from "dotenv";

dotenv.config();

const envConfig = {
  PORT: process.env.PORT || 5000,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || "http://localhost:3000",
  DB: {
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017",
    DB_NAME: process.env.DB_NAME || "product-db",
  },
};

export default envConfig;
