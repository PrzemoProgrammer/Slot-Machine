import { requestGet, requestPost } from "./helper/helper";

export const AUTHENTICATION = (data) => {
  return requestPost(data, "authentication");
};

export const REGISTRATION = (data) => {
  return requestPost(data, "registration");
};
