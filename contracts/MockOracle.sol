// SPDX-License-Identifier: MIT
 
pragma solidity ^0.8.28;
 
contract MockOracle {
 
    address public owner;
    uint256 public data;
    uint256 public lastUpdated;
 
    event DataUpdated(uint256 newData, uint256 timestamp);
 
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }
 
    constructor(uint256 _initialData) {
        owner = msg.sender;
        data = _initialData;
        lastUpdated = block.timestamp;
    }
 
    function updateData(uint256 _newData) external onlyOwner {
        data = _newData;
        lastUpdated = block.timestamp;
        emit DataUpdated(_newData, block.timestamp);
    }
 
    function getData() external view returns (uint256) {
        return data;
    }
}
