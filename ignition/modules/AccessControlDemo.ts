import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
 
export default buildModule("AccessControlDemoModule", (m) => {
  const accessControlDemo = m.contract("AccessControlDemo");
 
  return { accessControlDemo };
});
