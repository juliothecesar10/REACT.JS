const express = require("express");
const request = require("request");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/teste", (req, res) => {
  if (res.statusCode !== 200) {
    return res.status(500).send("error");
  }
  console.log("--------ok--------");
  res.send("Ok");
});

app.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");
