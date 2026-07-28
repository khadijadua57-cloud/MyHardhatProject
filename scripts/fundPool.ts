import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const [signer] = await ethers.getSigners();
 
  const myToken = await ethers.getContractAt(
    "MyToken",
    "0x6228A1Eeec4bD3DD93158F76C4A6c92751442cb3"
  );
 
  const stakingPoolAddress = "0xd9c44c2e628c078c3aDB04Eba07959e417f2EaC7";
  const fundAmount = ethers.parseUnits("100", 18); // 100 tokens as reward budget
 
  const tx = await myToken.transfer(stakingPoolAddress, fundAmount);
  await tx.wait();
 
  console.log("Funded StakingPool with 100 tokens.");
}
 
main().catch(console.error);
