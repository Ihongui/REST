const express = require("express");
const authenticateToken = require("../middleware/auth");
const router = express.Router();

router.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
