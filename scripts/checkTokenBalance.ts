import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const [signer] = await ethers.getSigners();
 
  const myToken = await ethers.getContractAt(
    "MyToken",
    "0x6228A1Eeec4bD3DD93158F76C4A6c92751442cb3"
  );
 
  const balance = await myToken.balanceOf(signer.address);
  console.log("Your address:", signer.address);
  console.log("Your token balance:", ethers.formatUnits(balance, 18));
}
 
main().catch(console.error);
