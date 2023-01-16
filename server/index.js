const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION: ", err.name, err.message);
  process.exit(1);
});

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err, "THROW PROPER ERROR"));

const server = app.listen(process.env.PORT || 3002, (err) =>
  err ? console.log(err) : console.log("SERVER SPINNING")
);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION: ", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
