import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
 
export default buildModule("VulnerableVaultModule", (m) => {
  const vault = m.contract("VulnerableVault", []);
  return { vault };
});
