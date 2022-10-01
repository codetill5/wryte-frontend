import { ethers } from "ethers";
import jsHttpCookie from "cookie";
import jsCookie from "js-cookie";
import Router from "next/router";

import { storageApi, userApi } from "../config/client";

const login = async (data) => {
  const response = await userApi.login(data);
  if (response) {
    jsCookie.set("userData", JSON.stringify(response.user), { expires: 3 });
  }
  return getUserData();
};

const getUserData = (req) => {
  if (req && req.headers) {
    const cookies = req.headers.cookie;
    if (typeof cookies === "string") {
      const cookiesJSON = jsHttpCookie.parse(cookies);
      return cookiesJSON;
    }
  } else {
    const userCookie = getCookie("userData");
    return userCookie;
  }
};

const getCookie = (name) => {
  if (typeof document !== "undefined") {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return decodeURIComponent(parts.pop().split(";").shift());
  }
};

const signMessage = async () => {
  const message = "Welcome";
  try {
    const ethereum = typeof window !== "undefined" ? window?.ethereum : "";
    if (!ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();

    return {
      message,
      signature,
      address,
    };
  } catch {
    return false;
  }
};

const verifyMessage = async ({ message, address, signature }) => {
  try {
    const signerAddr = await ethers.utils.verifyMessage(message, signature);
    if (signerAddr !== address) {
      return false;
    }
    return signerAddr;
  } catch {
    return false;
  }
};

const logout = async () => {
  // return await userApi.logout();
  await jsCookie.remove("userData");
  Router.push("/");
};

const editProfile = async (data) => {
  return await userApi.editProfile(data);
};

const uploadToIPFS = async (data) => {
  return await storageApi.upload(data);
};

const isLoggedIn = async () => {
  const loggedInData = getUserData();
  return loggedInData;
};

export {
  login,
  signMessage,
  verifyMessage,
  logout,
  editProfile,
  uploadToIPFS,
  isLoggedIn,
};
