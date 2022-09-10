import axios from "axios";
import _ from "lodash";

import {conf} from "./index";

const API_TIMEOUT = 20000;

const API_HEADERS = {
  "Content-Type": "multipart/form-data",
  "Content-Type": "application/json",
};

const api = axios.create({
  baseURL: conf.API_URL,
  timeout: API_TIMEOUT,
  headers: API_HEADERS,
});

const resolvePost = async (...args) => {
  try {
    const response = await api.post(...args);
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    if (_.has(error, "response.data")) {
      return error.response.data;
    }
    return null;
  }
};

const resolveGet = async (...args) => {
  try {
    const response = await api.get(...args);
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    if (_.has(error, "response.data")) {
      return error.response.data;
    }
    return null;
  }
};

const resolvePut = async (...args) => {
  try {
    const response = await xhypeApi.put(...args);
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    if (_.has(error, "response.data")) {
      return error.response.data;
    }
    return null;
  }
};

const resolvePatchRequest = async (...args) => {
  try {
    const response = await xhypeApi.patch(...args);
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    if (_.has(error, "response.data")) {
      return error.response.data;
    }
    return null;
  }
};
