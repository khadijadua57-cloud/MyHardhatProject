import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
 
  const nft = await ethers.getContractAt(
    "MyNFT",
    "0x73F758A9220892619616598C77cd4074F9D8e3D1"
  );
 
  const uri = await nft.tokenURI(0);
  console.log("Token #0 points to:", uri);
}
 
main().catch(console.error);
