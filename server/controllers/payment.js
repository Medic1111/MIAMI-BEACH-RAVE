const handle_async = require("../utils/handle_async");
const Client = require("../models/client");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const paymentControl = handle_async(async (req, res, next) => {
  const client = await Client.create({
    name: req.body.name,
    email: req.body.email,
    ticket_type: req.body.ticket_type,
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: `price_1MQZruA39eV6CqSsO7INdgm9`, quantity: 1 }],
    mode: "payment",
    success_url: `http://localhost:3000/success/${client.id}`,
    cancel_url: "http://localhost:3000/",
  });

  client.intent = session.payment_intent;
  await client.save();

  res
    .status(200)
    .json({ message: "Initiate Payment", url: session.url, client });
});

module.exports = { paymentControl };
