// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
 
contract FundMe {
    mapping(address => uint) public addressToAmountFunded;
 
    // people call this and send money with it
    function fund() public payable {
        addressToAmountFunded[msg.sender] += msg.value;
    }
 
    // check how much ETH the contract is holding
function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
