const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter your name as shown in your ID"],
      minLength: [6, "Please ensure you enter a valid name"],
      maxLength: [90, "Please ensure you enter a valid name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      minLength: [5, "email must be at least 5 chars long"],
      maxLength: [35, "email must be at most 35 chars long"],
    },
    purchase_date: {
      type: Date,
      default: new Date().toISOString(),
      select: false,
    },
    ticket_type: {
      type: String,
    },
    allowance: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    approved: {
      type: Boolean,
      require: [true, "What's the status of of this transaction?"],
      default: false,
    },
    intent: {
      select: false,
      default: "",
      type: String,
    },
    has_had_email: {
      select: false,
      default: false,
      type: Boolean,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

clientSchema.methods.attend = (allowanceCount) => {
  if (allowanceCount > 0) return this.allowance--;
};

clientSchema.pre("save", function (next) {
  if (this.ticket_type === "EVENT") {
    this.allowance = 5;
  } else if (this.ticket_type === "DAY") {
    this.allowance = 1;
  }
  next();
});

clientSchema.methods.verifyPayment = async function (intentId) {
  const intent = await stripe.paymentIntents.retrieve(intentId);
  if (intent.status === "succeeded") {
    this.approved = true;
    return true;
  }
  return false;
};

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
