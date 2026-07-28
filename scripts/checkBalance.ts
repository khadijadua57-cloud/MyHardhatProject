import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);
 
  const token = await ethers.getContractAt(
    "MyToken",
    "0x6228A1Eeec4bD3DD93158F76C4A6c92751442cb3"
  );
  const balance = await token.balanceOf(deployer.address);
  console.log("Balance:", balance.toString());
}
 
main().catch(console.error);
