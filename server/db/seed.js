const Client = require("../models/client");
const mongoose = require("mongoose");

const connection = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("DB READY TO SEED"))
    .catch((err) => console.log(err));
};

const mockClient = {
  name: "Mock Client",
  email: "mockclient@mock.com",
  ticket_type: "EVENT",
};

const seedDB = async () => {
  await connection();
  await Client.insertOne(mockClient)
    .then((newUser) => console.log("SEEDED: ", newUser))
    .catch((err) => console.log(err));
};

const clearDB = async () => {
  await connection();
  await Client.deleteMany()
    .then(() => console.log("CLEARED DB"))
    .catch((err) => console.log(err));
};

if (process.argv[2] === "-seed") return seedDB();
if (process.argv[2] === "-clear") return clearDB();
