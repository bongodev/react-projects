import { rateLimit as expressRateLimit } from "express-rate-limit";

const rateLimit = ({
  windowMs = 15 * 60 * 1000, // 15 minutes
  limit = 2000, // limit each IP to 2000 requests per windowMs
  message = "Too many requests, please try again later.",
  standardHeaders = true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders = false, // Disable the `X-RateLimit-*` headers
} = {}) =>
  expressRateLimit({
    windowMs,
    limit,
    message,
    standardHeaders,
    legacyHeaders,
  });

export default rateLimit;
