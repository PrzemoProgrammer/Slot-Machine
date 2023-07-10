const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const cors = require("cors");
const { SERVER_PORT } = require("../shared/config");
const port = process.env.PORT || SERVER_PORT;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
// app.options("/create-payment", cors());
// app.use(express.static(`${__dirname}/../client`));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

module.exports = {
  server,
  app,
  port,
};
