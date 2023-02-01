const route = require("express").Router();

// Create/Sell Ticket
route.post("/sell", (req, res) => {});
route.post("/sell-bulk", (req, res) => {});

// Read/Find
route.get("/all", (req, res) => {});
route.get("/t/:ticketId", (req, res) => {});
route.get("/u/:username", (req, res) => {});

// Update Ticket
route.put("/t/:ticketId", (req, res) => {});
route.put("/u/:username", (req, res) => {});

// Delete Ticket
// Raffle Draw

module.exports = route;
