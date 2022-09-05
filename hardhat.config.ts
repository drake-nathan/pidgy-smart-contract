import { HardhatUserConfig } from "hardhat/config";
import dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

dotenv.config();

const rinkebyRpcUrl = process.env.RINKEBY_RPC_URL;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: rinkebyRpcUrl,
      accounts: [
        "e3a54d16dcba299e7d0b5d9d8b5f6cd5cb5c17f5694ccb5c1798cf8d9cf4e486",
      ],
    },
  },
  etherscan: {
    apiKey: etherscanApiKey,
  },
};

export default config;
