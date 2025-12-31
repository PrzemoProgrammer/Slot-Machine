const { port } = require("../index");

const MODE = "sandbox";
const CLIENT_ID = "123";
const CLIENT_SECRET = "123";

const SERVER_URL = `http://localhost:${port}`;

module.exports = { CLIENT_ID, CLIENT_SECRET, MODE, SERVER_URL };
