import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const daoVoting = await ethers.getContractAt(
    "DAOVoting",
    "0x86349fC0Fd95d6771D32f4882c97bFA4EBd84F67"
  );
 
  const result = await daoVoting.getProposal(0);
  console.log("Description:", result[0]);
  console.log("Yes votes:", result[1].toString());
  console.log("No votes:", result[2].toString());
}
 
main().catch(console.error);
