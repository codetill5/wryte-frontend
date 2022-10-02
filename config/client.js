import axios from "axios";
import _ from "lodash";

import {
  contractEndpoints,
  nftStorageEnpoints,
  userEndpoints,
} from "./endpoints";
import keys from "../config/key.config";

const API_TIMEOUT = 20000;

const API_HEADERS = {
  "Content-Type": "multipart/form-data",
  "Content-Type": "application/json",
};

const NFT_STORAGE_HEADER = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDcxNDc5OTgxMjZGMzAwQmMxQmMwYUViNkNlZTFmMkZiY0QyYUY4YjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTUxMTc5NTcxOSwibmFtZSI6InRlc3RpbmcifQ.awUqr9yysVB7j2jb3hpwAsPRDc9piO0eswQMVUzGLOk`,
};

const CONTRACT_HEADER = {
  "x-api-key": keys.FETCH_CONTRACT,
};

const api = axios.create({
  baseURL: keys.API_URL,
  timeout: API_TIMEOUT,
  headers: API_HEADERS,
});

const nftStorageApi = axios.create({
  baseURL: "https://api.nft.storage",
  timeout: API_TIMEOUT,
  headers: NFT_STORAGE_HEADER,
});

const contractApis = axios.create({
  baseURL: "https://deep-index.moralis.io/api/v2",
  timeout: API_TIMEOUT,
  headers: CONTRACT_HEADER,
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
//     const response = await .put(...args);
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
//     const response = await .patch(...args);
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

const storagePost = async (...args) => {
  try {
    const response = await nftStorageApi.post(...args);
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

const contractGet = async (...args) => {
  try {
    const response = await contractApis.get(...args);
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

export const userApi = {
  login: (data = {}) => resolvePost(userEndpoints.login, data),
  logout: () => resolveGet(userEndpoints.logout),
  editProfile: (data = {}) => resolvePost(userEndpoints.editProfile, data),
};

export const storageApi = {
  upload: (data = {}) => storagePost(nftStorageEnpoints.upload, data),
};

export const contractApi = {
  getAllNftsFromContract: (data = "") =>
    contractGet(
      `${data.address}${contractEndpoints.getWalletNft}/${data.contract}?chain=mumbai&format=decimal`
    ),
  getMetadataByTokenId: (data = "") =>
    contractGet(
      `${contractEndpoints.getMetadataByTokenId}/${data.address}/${data.tokenId}?chain=mumbai&format=decimal`
    ),
};
