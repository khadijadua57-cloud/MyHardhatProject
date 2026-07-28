import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
 
export default buildModule("FundMeModule", (m) => {
  const fundMe = m.contract("FundMe");
 
  return { fundMe };
});
