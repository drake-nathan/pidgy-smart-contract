import { ethers } from "hardhat";

async function main() {
  const HdlLogo = await ethers.getContractFactory("HdlLogo");
  console.log("Deploying HdlLogo...");
  const hdlLogo = await HdlLogo.deploy();
  await hdlLogo.deployed();
  console.log("HdlLogo deployed to:", hdlLogo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// 0xFfb31563Eb3Bec1fDcB7321766d3EaF773CA6989
