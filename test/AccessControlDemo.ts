import { expect } from "chai";
import { network } from "hardhat";
 
describe("AccessControlDemo", async function () {
  const { ethers } = await network.connect();
 
  it("should set the deployer as owner", async function () {
    const [owner] = await ethers.getSigners();
    const contract = await ethers.deployContract("AccessControlDemo");
    expect(await contract.owner()).to.equal(owner.address);
  });
 
  it("should let the owner set a message", async function () {
    const contract = await ethers.deployContract("AccessControlDemo");
    await contract.setMessage("Hello Class");
    expect(await contract.message()).to.equal("Hello Class");
  });
 
  it("should block a non-owner from setting a message", async function () {
    const [, otherAccount] = await ethers.getSigners();
    const contract = await ethers.deployContract("AccessControlDemo");
    await expect(
      contract.connect(otherAccount).setMessage("Hacked!")
    ).to.be.revertedWith("Not the owner");
  });
 
  it("should reject an empty message", async function () {
    const contract = await ethers.deployContract("AccessControlDemo");
    await expect(contract.setMessage("")).to.be.revertedWith(
      "Message cannot be empty"
    );
  });
});
