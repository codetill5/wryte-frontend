import contractAbi from '../contractABI.json'
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const key = "wss://polygon-mumbai.g.alchemy.com/v2/sYXfUNhkdJnhXAWkGIXXc82VRXPguDtF"
const contractAddress = "0x417ee1be29d57c201677e099080379957a6050aa";



export const helloWorldContract = new web3.eth.Contract(
    contractABI,
    contractAddress
  );

export const loadCurrentMessage = async () => {

};

export const connectWallet = async () => {

};

const getCurrentWalletConnected = async () => {

};


export const updateMessage = async (message) => {

};  