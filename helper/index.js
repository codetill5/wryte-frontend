import { ethers } from "ethers";
import { userApi } from "../config/client";

const login = async (data) => {
  return userApi.login(data);
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
  return await userApi.logout();
};

export { login, signMessage, verifyMessage, logout };
