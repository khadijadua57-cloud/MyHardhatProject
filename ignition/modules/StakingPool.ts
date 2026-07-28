import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
 
export default buildModule("StakingPoolModule", (m) => {
  const tokenAddress = "0x6228A1Eeec4bD3DD93158F76C4A6c92751442cb3";
  const stakingPool = m.contract("StakingPool", [tokenAddress]);
  return { stakingPool };
});
