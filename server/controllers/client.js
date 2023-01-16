const handle_async = require("../utils/handle_async");
const Client = require("../models/client");
const AppError = require("../utils/app_error");
const send_email = require("../utils/send_email");

const getClient = handle_async(async (req, res, next) => {
  const client = await Client.findById({ _id: req.params.id }).select(
    "+intent +has_had_email"
  );
  if (!client) return next(new AppError("Client not found", 404));
  let hasPaid = await client.verifyPayment(client.intent);
  if (hasPaid && !client.has_had_email) {
    await send_email({
      email: client.email,
      subject: "Miami Beach Rave",
      message: `Enjoy Miami Beach Rave! 
    You can check your QRCode here https://miamibeachrave.onrender.com/success/${client.id}`,
    });

    client.has_had_email = true;
    await client.save();
  }
  client.intent = null;
  client.has_had_email = null;
  res.status(200).json({ client });
});

const deleteClient = handle_async(async (req, res, next) => {
  let client = await Client.findByIdAndDelete(req.params.id);
  if (!client) return next(new AppError("No client found", 404));
  res.json(200).json({ message: "DELETED" });
});

const clientControl = {
  getClient,
  deleteClient,
};

module.exports = { clientControl };
