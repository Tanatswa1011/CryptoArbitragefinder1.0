const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Crypto Arbitrage Tool API is running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
