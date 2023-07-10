const { port } = require("../index");

const MODE = "sandbox"; // 'sandbox' for a test environment or 'live' for a production environment
const CLIENT_ID =
  "ARTefP79Apg2DPlakJ3JjNxFUDKJ2KWIj9WYUJf5QIXiw9hl8PwGJyLyhVWANUqp3jY9hp2ACV_E9Mdq";
const CLIENT_SECRET =
  "EOQ_jZdpe2hngWyR4YrwKmggio67_pih7fWfmp-KgRkqbAC9O2a8-FW5sKq6nCqsT6Pyioey8Ku_LvOB";

const SERVER_URL = `http://localhost:${port}`;

module.exports = { CLIENT_ID, CLIENT_SECRET, MODE, SERVER_URL };
