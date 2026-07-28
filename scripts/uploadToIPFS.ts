import pinataSDK from "@pinata/sdk";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
 
const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT });
 
async function main() {
  const filePath = "./upload/sample.txt";
  const readableStreamForFile = fs.createReadStream(filePath);
 
  const options = {
    pinataMetadata: { name: "sample.txt" },
  };
 
  const result = await pinata.pinFileToIPFS(readableStreamForFile, options);
  console.log("File uploaded! CID:", result.IpfsHash);
}
 
main().catch(console.error);
