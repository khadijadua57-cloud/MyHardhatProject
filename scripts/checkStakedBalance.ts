import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const [signer] = await ethers.getSigners();
 
  const stakingPool = await ethers.getContractAt(
    "StakingPool",
    "0xd9c44c2e628c078c3aDB04Eba07959e417f2EaC7"
  );
 
  const staked = await stakingPool.stakedBalance(signer.address);
  console.log("Your staked balance:", ethers.formatUnits(staked, 18));
}
 
main().catch(console.error);
