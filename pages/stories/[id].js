import React from "react";
import Editor from "../../components/Editor/Editor";

const Stories = () => {
  const data = {
    title: "How to create Collection with Candy Machine V2 from scratch",
    blogData: {
      time: 1664617111481,
      blocks: [
        {
          id: "92jKaoZ_3s",
          type: "image",
          data: {
            file: {
              url: "https://ipfs.io/ipfs/bafybeihxcy6caq62o4vb7nsufqlgfmzyvthziab7sxes6q324smgeg57va",
            },
            caption: "Picture By LORI DORN",
            withBorder: false,
            stretched: false,
            withBackground: false,
          },
        },
        { id: "7lYG6zXTGN", type: "delimiter", data: {} },
        {
          id: "krfROy-k47",
          type: "header",
          data: {
            text: "Let’s get hands dirty",
            level: 3,
            alignment: "left",
          },
        },
        {
          id: "2gfNyYEgrs",
          type: "paragraph",
          data: {
            text: "&nbsp; Installing the Prerequisites : <i>We will be needing couple of things to create a collection. So, let’s get started by installing things step by step.&nbsp;</i>&nbsp;",
            alignment: "left",
          },
        },
        {
          id: "SSi3Oe_qvy",
          type: "paragraph",
          data: {
            text: "Basic stuff like node, npm/yarn, git etc is something i will not talk about i will be mainly focusing on Metaplex.",
            alignment: "left",
          },
        },
        {
          id: "DWBO7yU8h6",
          type: "paragraph",
          data: {
            text: "Below commands will let you clone the metaplex project and will install all the needed packages.",
            alignment: "left",
          },
        },
        {
          id: "xDTsKODIyw",
          type: "code",
          data: {
            code: "Clone the repository: \n$ git clone https://github.com/metaplex-foundation/metaplex.git\nChange directory to js and hit yarn:\ncd js\nyarn",
          },
        },
        {
          id: "wufAFANh7D",
          type: "header",
          data: {
            text: "Getting Started with Candy Machine:",
            level: 3,
            alignment: "left",
          },
        },
        {
          id: "4cLmFsH1pz",
          type: "paragraph",
          data: {
            text: "Before getting started to create collection. We need to check is everything working fine. So, we will be running a command to check the version of candy machine v2.",
            alignment: "left",
          },
        },
        {
          id: "QYUYurQqMG",
          type: "paragraph",
          data: {
            text: "Now, change directory to metaplex and run the below command.",
            alignment: "left",
          },
        },
        {
          id: "0vgEQOAOM0",
          type: "paragraph",
          data: {
            text: '<code class="inline-code"><font color="#673ab7">npx ts-node js/packages/cli/src/candy-machine-v2-cli.ts --version</font></code>',
            alignment: "left",
          },
        },
        {
          id: "qP2hcCxM53",
          type: "list",
          data: {
            style: "ordered",
            items: [
              "Creating wallet, funding wallet and switching network:&nbsp;",
            ],
          },
        },
        {
          id: "Jbokawv-Vl",
          type: "paragraph",
          data: {
            text: "If you haven’t installed Solana cli. Just hit the commands given below-",
            alignment: "left",
          },
        },
        {
          id: "oJ0BSKzzbh",
          type: "code",
          data: {
            code: "curl https://release.solana.com/v1.10.8/solana-install-init-x86_64-pc-windows-msvc.exe —\n output C:\\solana-install-tmp\\solana-install-init.exe — create-dirs\nTo make sure it is installed or not. Run \nsolana --version",
          },
        },
        {
          id: "LUTASZP-TI",
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Creating wallet: Just install any solana wallet eg. phantom, solfare etc and create a new wallet. I will be using Solfare. Copy the address from the wallet.",
              "Funding wallet: You can use https://solfaucet.com/ to fund your wallet or it can be done by running some commands on cli.<br>",
            ],
          },
        },
      ],
      version: "2.25.0",
    },
  };


  return (
    <div className="storyContainer">
      <Editor data={data?.blogData} title={data?.title} />
    </div>
  );
};

export default Stories;
