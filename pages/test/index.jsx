import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import contractABI from "../../contractABI.json";

const Test = () => {
  const [NFTContract, setNFTContract] = useState(null);
  const contractAddress = "0x8c69665df73d0536FA1EC46E5aBbd1825b1b35Dc";

  const handleMint = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc721 = new ethers.Contract(contractAddress, contractABI, provider);

    const tokenName = await erc721.name();
    const tokenSymbol = await erc721.symbol();

    console.log(tokenName, tokenSymbol);
  }


  const writting = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc721 = new ethers.Contract(contractAddress, contractABI, signer);
    await erc721.mint("www.mint.xyz");

  }

  return (
    <div>
      <button onClick={() => writting()}>submit</button>
    </div>
  );
};

export default Test;
