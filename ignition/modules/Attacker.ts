import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
 
export default buildModule("AttackerModule", (m) => {
  const attacker = m.contract("Attacker", ["0x2bb1C94151bF784c58cdCe7624E553CDB08a9f58"]);
  return { attacker };
});
