// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
 
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
 
contract StakingPool {
    IERC20 public token;
    uint256 public rewardPercent = 10; // 10% bonus when you unstake
 
    mapping(address => uint256) public stakedBalance;
 
    constructor(address tokenAddress) {
        token = IERC20(tokenAddress);
    }
 
    function stake(uint256 amount) public {
        require(amount > 0, "Amount must be greater than zero");
        token.transferFrom(msg.sender, address(this), amount);
        stakedBalance[msg.sender] += amount;
    }
 
    function unstake() public {
        uint256 staked = stakedBalance[msg.sender];
        require(staked > 0, "Nothing staked");
 
        uint256 reward = (staked * rewardPercent) / 100;
        uint256 payout = staked + reward;
 
        stakedBalance[msg.sender] = 0;
        token.transfer(msg.sender, payout);
    }
}
