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

// 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
