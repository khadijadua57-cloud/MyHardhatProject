import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
 
  const myToken = await ethers.getContractAt(
    "MyToken",
    "0x6228A1Eeec4bD3DD93158F76C4A6c92751442cb3"
  );
 
  const stakingPoolAddress = "0xd9c44c2e628c078c3aDB04Eba07959e417f2EaC7";
  const poolBalance = await myToken.balanceOf(stakingPoolAddress);
 
  console.log("StakingPool token balance:", ethers.formatUnits(poolBalance, 18));
}
 
main().catch(console.error);
