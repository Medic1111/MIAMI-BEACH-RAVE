const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimiter = require("express-rate-limit");
const hpp = require("hpp");
const xss = require("xss-clean");
const path = require("path");
const AppError = require("./utils/app_error");
const { err_handler } = require("./utils/error_handler");
require("dotenv").config();
const app = express();

// SECURITY
process.env.NODE_ENV === "development" && app.use(morgan("dev"));
app.use(
  "/",
  rateLimiter({
    max: 500,
    window: 60 * 60 * 1000,
    message: "Too many requests from this IP, try again in an hour",
  })
);
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(cors({ origin: "*" }));

// ROUTES
const paymentRouter = require("./routes/payment");
const clientRouter = require("./routes/client");

// CONTROLLERS
app.use("/api/v1/create_checkout_session", paymentRouter);
app.use("/api/v1/client/", clientRouter);

// UNHANDLED/UNIVERSAL ROUTES
if (process.env.NODE_ENV === "production") {
  app.all("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
} else {
  app.all("*", (req, res, next) => {
    next(new AppError("Unsupported route", 404));
  });
}

// ERROR
app.use(err_handler);

module.exports = app;
