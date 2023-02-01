const router = require("express").Router();

router.get("/health", (_req, res) => {
  res.status(200).json({ message: "ok", success: true });
});

router.use("/api/v1/tickets", require("../routes/ticket"));

module.exports = router;
