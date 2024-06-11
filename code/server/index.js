const { SERVER_PORT } = require("./config");
const http = require("http");
const compression = require("compression");
const express = require("express");
const app = express();
const server = http.createServer(app);
const cors = require("cors");
const port = process.env.PORT || SERVER_PORT;
const socketIo = require("socket.io");
const socketServer = socketIo(server, {
  cors: {
    origin: "*",
  },
});

app.use(
  cors({
    origin: "*",
  })
);

app.use(compression());
app.use(express.json());
app.use(express.static(`${__dirname}/../client`));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

module.exports = {
  server,
  app,
  port,
  socketServer,
};
