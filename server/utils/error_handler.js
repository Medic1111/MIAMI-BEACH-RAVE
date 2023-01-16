const err_handler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  process.env.NODE_ENV === "development" &&
    console.log(err.statusCode, err.message);

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

module.exports = { err_handler };
