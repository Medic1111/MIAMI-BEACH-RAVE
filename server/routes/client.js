const clientRouter = require("express").Router();
const { clientControl } = require("../controllers/client");

clientRouter
  .route("/:id")
  .get(clientControl.getClient)
  .delete(clientControl.deleteClient);

module.exports = clientRouter;
