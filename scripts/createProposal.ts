import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const daoVoting = await ethers.getContractAt(
    "DAOVoting",
    "0x86349fC0Fd95d6771D32f4882c97bFA4EBd84F67"
  );
 
  const tx = await daoVoting.createProposal("Should we fund the new library wing?");
  await tx.wait();
  console.log("Proposal created.");
}
 
main().catch(console.error);
