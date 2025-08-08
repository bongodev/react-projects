import mongoose from "mongoose";

const errorHandler = (err, req, res, next) => {
  console.error(
    `[${new Date().toISOString()}]: ❌ ERROR ${req.method} ~ ${req.url} ~ ${
      err.message
    }`
  );

  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }

  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
