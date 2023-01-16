const paymentRouter = require("express").Router();
const { paymentControl } = require("../controllers/payment");

paymentRouter.route("/").post(paymentControl);

module.exports = paymentRouter;
