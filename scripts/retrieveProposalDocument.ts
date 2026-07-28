import { network } from "hardhat";
 
async function main() {
  const { ethers } = await network.connect();
  const dao = await ethers.getContractAt("DAOVoting", "0xC87e92B7324437D7B2BBD61820EA7c585e35B350");
 
  const proposalId = 0;
  const proposal = await dao.getProposal(proposalId);
 
  console.log("Description:", proposal.description);
  console.log("Document CID:", proposal.documentCID);
 
  const url = `https://gateway.pinata.cloud/ipfs/${proposal.documentCID}`;
  const response = await fetch(url);
 
  const contentType = response.headers.get("content-type") || "unknown";
  const buffer = await response.arrayBuffer();
 
  console.log("Content type:", contentType);
  console.log("Document size:", buffer.byteLength, "bytes");
 
  if (contentType.startsWith("text/") || contentType.includes("json")) {
    console.log("Content:", Buffer.from(buffer).toString("utf-8"));
  } else {
    console.log("Binary file detected — not printing raw content, but the fetch succeeded.");
  }
}
 
main().catch(console.error);
