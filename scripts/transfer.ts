import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const [deployer] = await ethers.getSigners();
 
  const recipientAddress = "0x7D604F99E08B01B6335234280E09F7bB1D495CCf";
 
  const token = await ethers.getContractAt(
    "MyToken",
    "0x6228A1Eeec4bD3DD93158F76C4A6c92751442cb3"
  );
 
  console.log("Deployer:", deployer.address);
  console.log("Recipient:", recipientAddress);
 
  const supplyBefore = await token.totalSupply();
  console.log("Total supply before:", supplyBefore.toString());
 
  const beforeDeployer = await token.balanceOf(deployer.address);
  const beforeRecipient = await token.balanceOf(recipientAddress);
  console.log("Before — Deployer balance:", beforeDeployer.toString());
  console.log("Before — Recipient balance:", beforeRecipient.toString());
 
  const amount = ethers.parseUnits("50", 18); // send 50 tokens
  const tx = await token.transfer(recipientAddress, amount);
  await tx.wait();
 
  const afterDeployer = await token.balanceOf(deployer.address);
  const afterRecipient = await token.balanceOf(recipientAddress);
  console.log("After — Deployer balance:", afterDeployer.toString());
  console.log("After — Recipient balance:", afterRecipient.toString());
 
  const supplyAfter = await token.totalSupply();
  console.log("Total supply after:", supplyAfter.toString());
}
 
main().catch(console.error);
