//日志组件
import LogItem from "./LogItem";
import './Logs.css';
import data from "../../data";
const Logs = () => {
  return (
    <div className="logs">
      {data.map((item) => (
        <LogItem data={item}/>
      ))}
    </div>
  );
};
export default Logs;
