import { SERVER_URL } from "../../config";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const requestPost = (data, url) => {
  return fetch(`${SERVER_URL}/${url}`, {
    method: "post",
    headers: headers,
    body: JSON.stringify(data),
  });
};

export const requestGet = (url) => {
  return fetch(`${SERVER_URL}/${url}`, {
    headers: headers,
  });
};
