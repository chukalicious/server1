const express = require("express");

const Fares = require("./fares-models");

const router = express.Router();

router.get("/", async (req, res) => {
  Fares.find()
    .then((fares) => {
      if (fares) {
        res.status(200).json(fares);
      } else {
        res.status(404).json({ message: "no offers were found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "server error" });
    });
});

module.exports = router;
