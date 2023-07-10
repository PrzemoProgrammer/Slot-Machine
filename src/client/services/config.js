import { SERVER_PORT } from "../../shared/config";

let SERVER_URL = `${location.protocol}//${location.hostname}`;
let WEBSOCKET_URL = `ws://${location.hostname}:${SERVER_PORT}`;

if (location.protocol == "http:") {
  SERVER_URL += `:${SERVER_PORT}`;
} else {
  WEBSOCKET_URL = location.origin.replace(/^http/, "ws");
}

export { SERVER_URL, WEBSOCKET_URL };
