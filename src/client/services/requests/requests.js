import { requestGet, requestPost } from "./helper";

export const LOGIN = (data) => {
  return requestPost(data, "login");
};

export const REGISTER = (data) => {
  return requestPost(data, "register");
};

export const GAME_STATE = (data) => {
  return requestPost(data, "game_state");
};

export const SPIN = (data) => {
  return requestPost(data, "spin");
};

export const CREATE_PAYMENT = (data) => {
  return requestPost(data, "create_payment");
};
