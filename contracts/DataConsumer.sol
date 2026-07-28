// SPDX-License-Identifier: MIT
 
pragma solidity ^0.8.28;
 
import "./MockOracle.sol";
 
contract DataConsumer {
 
    MockOracle public oracle;
 
    constructor(address _oracleAddress) {
        oracle = MockOracle(_oracleAddress);
    }
 
    function readOracleData() external view returns (uint256) {
        return oracle.getData();
    }
}

