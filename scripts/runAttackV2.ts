import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const signers = await ethers.getSigners();
 
  const vault = await ethers.getContractAt(
    "SecureVault",
    "0xCC0D87388862571c83a8022534F7a636b0728a31"
  );
  const attackerContract = await ethers.getContractAt(
    "AttackerV2",
    "0x1902863Ed9F6E18821447FD215589a16cE548d68",
    signers[3]
  );
 
  const vaultBalanceBefore = await vault.getBalance();
  console.log("Vault balance BEFORE attack:", ethers.formatEther(vaultBalanceBefore), "ETH");
 
  try {
    const tx = await attackerContract.attack({ value: ethers.parseEther("1") });
    await tx.wait();
    console.log("Attack transaction succeeded (unexpected!)");
  } catch (err) {
    console.log("Attack transaction reverted, as expected.");
  }
 
  const vaultBalanceAfter = await vault.getBalance();
  const stolen = await attackerContract.stolenBalance();
 
  console.log("Vault balance AFTER attack:", ethers.formatEther(vaultBalanceAfter), "ETH");
  console.log("Attacker contract now holds:", ethers.formatEther(stolen), "ETH");
}
 
main().catch(console.error);
