import { useState } from "react";
import Logs from "./Components/Log/Logs";
import LogsForm from "./Components/LogForm/LogsForm";
const App = () => {
  const [logsData, setLogsData] = useState([
    {
      id: 11,
      date: new Date(2023, 12, 23),
      desc: "感觉埃里克森国家的卡卡黄金卡了估计",
      time: 111,
    },
    {
      id: 432,
      date: new Date(2024, 1, 1),
      desc: "结果肯定是拉开进攻都是辣的机构行家但是",
      time: 43215,
    },
    {
      id: 53,
      date: new Date(),
      desc: "附近的萨克两个贷记卡独立国家",
      time: 421,
    },
  ]);
  const addLogHandler = (newLog) => {
    newLog.id = new Date();
    setLogsData([newLog, ...logsData]);
  };
  return (
    <div>
      <LogsForm onAddLog={addLogHandler} />
      <Logs logsData={logsData} />
    </div>
  );
};
export default App;
