const AppError = require("./app_error");

const handleCastErrDB = (error) => {
  console.log("CAST ERROR");
  const message = `Invalid ${error.path}: ${error.value}`;
  return new AppError(message, 400);
};

const handleDuplicateDB = (error) => {
  console.log("DUPLICATE");
  const message = `Duplicate field. Choose another value`;
  return new AppError(message, 409);
};

const handleValidationDB = (error) => {
  console.log("VALIDATION ERR");
  const errors = Object.values(error.errors).map((el) => el.message);
  const message = `Invalid Input Data: ${errors}`;
  return new AppError(message, 422);
};

const err_handler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  process.env.NODE_ENV === "development" &&
    console.log(err.statusCode, err.message);

  let error = { ...err };
  if (err.name === "CastError") error = handleCastErrDB(error);
  if (err.code === 11000) error = handleDuplicateDB(error);
  if (err.errors) error = handleValidationDB(error);

  res.status(err.statusCode).json({
    status: err.status || error.status,
    message: err.message || error.message,
  });
};

module.exports = { err_handler };
