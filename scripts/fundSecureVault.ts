import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const signers = await ethers.getSigners();
 
  const vaultAsDepositor1 = await ethers.getContractAt(
    "SecureVault",
    "0xCC0D87388862571c83a8022534F7a636b0728a31",
    signers[1]
  );
  const tx1 = await vaultAsDepositor1.deposit({ value: ethers.parseEther("5") });
  await tx1.wait();
  console.log("Depositor 1 deposited 5 ETH");
 
  const vaultAsDepositor2 = await ethers.getContractAt(
    "SecureVault",
    "0xCC0D87388862571c83a8022534F7a636b0728a31",
    signers[2]
  );
  const tx2 = await vaultAsDepositor2.deposit({ value: ethers.parseEther("5") });
  await tx2.wait();
  console.log("Depositor 2 deposited 5 ETH");
 
  const vault = await ethers.getContractAt(
    "SecureVault",
    "0xCC0D87388862571c83a8022534F7a636b0728a31"
  );
  const balance = await vault.getBalance();
  console.log("Vault total balance:", ethers.formatEther(balance), "ETH");
}
 
main().catch(console.error);
