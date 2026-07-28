import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const [signer] = await ethers.getSigners();
  const daoVoting = await ethers.getContractAt(
    "DAOVoting",
    "0x86349fC0Fd95d6771D32f4882c97bFA4EBd84F67"
  );
 
  const tx = await daoVoting.vote(0, true); // proposalId 0, voting "yes"
  await tx.wait();
  console.log("Vote cast by:", signer.address);
}
 
main().catch(console.error);
