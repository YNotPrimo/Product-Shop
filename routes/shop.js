const path = require("path");
const express = require("express");

const fileDir = require("../util/path");
const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("shop.js", adminData.products);
  res.sendFile(path.join(fileDir, "views", "index.html"));
});

module.exports = router;
