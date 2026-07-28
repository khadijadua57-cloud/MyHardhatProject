import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
 
export default buildModule("SecureVaultModule", (m) => {
  const vault = m.contract("SecureVault", []);
  return { vault };
});
