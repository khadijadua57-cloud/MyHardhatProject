import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const [signer] = await ethers.getSigners();
 
  const myToken = await ethers.getContractAt(
    "MyToken",
    "0x5F679788BA6875AF743c98aCCE493cE5E60C14eF"
  );
 
  const stakingPool = await ethers.getContractAt(
    "StakingPool",
    "0x099A4ab80afb9257C865C99FAc19F9891d5fC2F8"
  );
 
  const stakeAmount = ethers.parseUnits("50", 18); // stake 50 tokens
 
  const approveTx = await myToken.approve(await stakingPool.getAddress(), stakeAmount);
  await approveTx.wait();
  console.log("Approved StakingPool to spend 50 tokens.");
 
  const stakeTx = await stakingPool.stake(stakeAmount);
  await stakeTx.wait();
  console.log("Staked 50 tokens successfully.");
}
 
main().catch(console.error);
