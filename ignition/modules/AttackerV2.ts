import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
 
export default buildModule("AttackerV2Module", (m) => {
  const attacker = m.contract("AttackerV2", ["0xCC0D87388862571c83a8022534F7a636b0728a31"]);
  return { attacker };
});
