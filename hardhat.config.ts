import { HardhatUserConfig } from "hardhat/config";
import dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

dotenv.config();

const rinkebyRpcUrl = process.env.RINKEBY_RPC_URL;
const goerliRpcUrl = process.env.GOERLI_RPC_URL;

const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

const privateKey = process.env.PRIVATE_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: rinkebyRpcUrl,
      accounts: [privateKey],
    },
    goerli: {
      url: goerliRpcUrl,
      accounts: [privateKey],
    },
  },
  etherscan: {
    apiKey: etherscanApiKey,
  },
};

export default config;
