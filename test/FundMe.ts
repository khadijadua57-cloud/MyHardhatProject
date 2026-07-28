import { expect } from "chai";
import { network } from "hardhat";
 
describe("FundMe", async function () {
  const { ethers } = await network.connect();
 
  it("should start with a balance of 0", async function () {
    const fundMe = await ethers.deployContract("FundMe");
    expect(await fundMe.getBalance()).to.equal(0);
  });
 
  it("should update the balance after someone funds it", async function () {
    const fundMe = await ethers.deployContract("FundMe");
    const [funder] = await ethers.getSigners();
 
    await fundMe.connect(funder).fund({
      value: ethers.parseEther("1"),
    });
 
    expect(await fundMe.getBalance()).to.equal(ethers.parseEther("1"));
  });
 
  it("should remember how much a specific address funded", async function () {
    const fundMe = await ethers.deployContract("FundMe");
    const [funder] = await ethers.getSigners();
 
    await fundMe.connect(funder).fund({
      value: ethers.parseEther("2"),
    });
 
    expect(
      await fundMe.addressToAmountFunded(funder.address)
    ).to.equal(ethers.parseEther("2"));
  });
});
