import { ethers } from "hardhat";

async function main() {
  const Pidgy = await ethers.getContractFactory("Pidgy");
  console.log("Deploying Pidgy...");
  const pidgy = await Pidgy.deploy();
  await pidgy.deployed();
  console.log("Pidgy deployed to:", pidgy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// 0xd230BB921c8AeF57bfe34b2D673d4f3Cf566dd5c
