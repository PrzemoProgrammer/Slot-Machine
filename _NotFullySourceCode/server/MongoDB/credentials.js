require("dotenv").config();
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const DB_URL = process.env.DB_URL;

module.exports = { DB_URL, USERNAME, PASSWORD, HOST };
