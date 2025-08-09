import { rateLimit as expressRateLimit } from "express-rate-limit";

const rateLimit = expressRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 200, // limit each IP to 200 requests per windowMs
  message: "Too many requests, please try again later.",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export default rateLimit;
