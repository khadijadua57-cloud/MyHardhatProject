import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
 
export default buildModule("DAOVotingModule", (m) => {
  const daoVoting = m.contract("DAOVoting", []);
  return { daoVoting };
});
