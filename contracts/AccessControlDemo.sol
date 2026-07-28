// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
contract AccessControlDemo {
    address public owner;
    string public message;
    uint256 public totalUpdates;
 
    constructor() {
        owner = msg.sender;
    }
 
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }
 
    function setMessage(string memory _message) public onlyOwner {
        require(bytes(_message).length > 0, "Message cannot be empty");
        message = _message;
        totalUpdates += 1;
    }
}
