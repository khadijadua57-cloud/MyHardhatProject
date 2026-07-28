import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const dao = await ethers.getContractAt("DAOVoting", "0xC87e92B7324437D7B2BBD61820EA7c585e35B350");
 
  const tx1 = await dao.createProposal("Should we fund the new community garden?");
  await tx1.wait();
 
  const proposalId = 0;
  const tx2 = await dao.attachDocument(proposalId, "QmT4vDEhCK7DVCMMtWLKmGuTrwWfLUugqctzck7TYo8a7g");
  await tx2.wait();
 
  const proposal = await dao.getProposal(proposalId);
  console.log("Description:", proposal.description);
  console.log("Document CID:", proposal.documentCID);
}
 
main().catch(console.error);
