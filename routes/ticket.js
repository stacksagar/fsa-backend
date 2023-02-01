const myDB = require("../db/db");

const route = require("express").Router();

// Create/Sell Ticket
route.post("/sell", (req, res) => {
  const ticket = myDB.create(req.body?.username, req.body?.price);
  res.status(200).json({ ticket });
});

route.post("/sell-bulk", (req, res) => {
  const tickets = myDB.bulkCreate(
    req.body?.username,
    req.body?.price,
    req.body?.quantity
  );
  res.status(200).json({ tickets });
});

// Read/Find
route.get("/all", (req, res) => {
  const tickets = myDB.find();
  res.status(200).json({ tickets });
});
route.get("/t/:ticketId", (req, res) => {
  const ticket = myDB.findById(req.params.ticketId);
  res.status(200).json({ ticket });
});

route.get("/u/:username", (req, res) => {
  const tickets = myDB.findByUsername(req.params.username);
  res.status(200).json({ tickets });
});

// Update Ticket
route.put("/t/:ticketId", (req, res) => {
  const ticket = myDB.updateById(
    req.params?.ticketId,
    req.body?.username,
    req.body?.price
  );
  res.status(200).json({ ticket });
});

route.put("/u/:username", (req, res) => {
  const updated = myDB.updateByUsername(
    req.params?.username,
    req.body?.username,
    req.body?.price
  );
  res.status(200).json({ message: "success", updated });
});

// Delete Ticket
route.delete("/t/:ticketId", (req, res) => {
  const deleted = myDB.deleteById(req.params?.ticketId);
  res.status(200).json({ message: "success", deleted });
});

route.delete("/u/:username", (req, res) => {
  const deleted = myDB.deleteByUsername(req.params?.username);
  res.status(200).json({ deleted });
});

// Raffle Draw
route.get("/draw", (req, res) => {
  const winners = myDB.draw(req.query?.winnerCount);
  res.status(200).json({ winners });
});

module.exports = route;
