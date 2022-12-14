const express = require("express");

const server = express();

server.use(express.json());

const Fares = require("./api/fares/fares-model");

// Fares

server.get("/", (req, res) => {
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

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
