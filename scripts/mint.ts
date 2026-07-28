import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const [signer] = await ethers.getSigners();
 
  const nft = await ethers.getContractAt(
    "MyNFT",
    "0x73F758A9220892619616598C77cd4074F9D8e3D1"
  );
 
  const tokenURI = "ipfs://bafkreicb46oav6ssivvxztevd6x6eifpmesgimxezkvqfo5fuygvw2ozqi";
  const tx = await nft.mintNFT(tokenURI);
  await tx.wait();
 
  console.log("Minted by:", signer.address);
  console.log("Token URI:", tokenURI);
}
 
main().catch(console.error);
