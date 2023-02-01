const ticket_router = require("express").Router();

const r = ticket_router.route("/tickets");

r.get("/", (_req, res) => {
  res.send("working");
});

module.exports = ticket_router;
