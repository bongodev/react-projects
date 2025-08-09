import cors from "cors";
import express from "express";

import envConfig from "./config/envConfig.js";

import { logger, rateLimit } from "./middlewares/index.js";

import configureRouters from "./routers/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import connectDB from "./db.js";

const app = express();

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: envConfig.ALLOWED_ORIGIN,
  })
);

app.use(rateLimit({}));

app.use(logger);

configureRouters(app);

app.use(errorHandler);

app.listen(envConfig.PORT, () => {
  console.log(`Example app listening on port ${envConfig.PORT}`);
});
