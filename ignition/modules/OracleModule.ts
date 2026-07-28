import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
 
export default buildModule("OracleModule", (m) => {
  const initialData = m.getParameter("initialData", 100);
  const oracle = m.contract("MockOracle", [initialData]);
  const consumer = m.contract("DataConsumer", [oracle]);
 
  return { oracle, consumer };
});
