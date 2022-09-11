import axios from "axios";
import _ from "lodash";
import { userEndpoints } from "./endpoints";

const API_TIMEOUT = 20000;

const API_HEADERS = {
  "Content-Type": "multipart/form-data",
  "Content-Type": "application/json",
};

const api = axios.create({
  baseURL: "http://localhost:4000/api/v1",
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

// const resolvePut = async (...args) => {
//   try {
//     const response = await xhypeApi.put(...args);
//     if (response.data) {
//       return response.data;
//     }
//     return response;
//   } catch (error) {
//     if (_.has(error, "response.data")) {
//       return error.response.data;
//     }
//     return null;
//   }
// };

// const resolvePatchRequest = async (...args) => {
//   try {
//     const response = await xhypeApi.patch(...args);
//     if (response.data) {
//       return response.data;
//     }
//     return response;
//   } catch (error) {
//     if (_.has(error, "response.data")) {
//       return error.response.data;
//     }
//     return null;
//   }
// };

export const userApi = {
  login: (data = {}) => resolvePost(userEndpoints.login, data),
  logout: () => resolveGet(userEndpoints.logout),
  editProfile: (data = {}) => resolvePost(userEndpoints.editProfile, data),
  // mintMultiple: (data = {}) => resolvePost(endPoints.mintMultiple, data),
  // multipleTokenMetadata: (data = '') => resolveGet(`${endPoints.multipleTokenMetadata}/${data.contractAddress}/${data.tokenId}`),
  // getMultipleToken: (data = '') => resolveGet(`${endPoints.getMultipleToken}/${data}`),
  // encryptTokenId: (data = {}) => resolvePut(endPoints.encryptTokenId, data),
  // decryptTokenId: (data = '') =>  resolveGetRequest(`${endPoints.encryptTokenId}/${data}`),
};
