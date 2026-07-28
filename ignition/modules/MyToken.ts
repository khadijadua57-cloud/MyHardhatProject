import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
 
export default buildModule("MyTokenModule", (m) => {
  const initialSupply = 1000; // 1000 tokens
  const token = m.contract("MyToken", [initialSupply]);
  return { token };
});
