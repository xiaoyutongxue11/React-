//日志组件
import LogItem from "./LogItem";
import "./Logs.css";
import data from "../../data";
import Card from "../UI/Card/Card";
const Logs = () => {
  return (
    <Card className="logs">
      {data.map((item) => (
        <LogItem data={item} key={item.id} />
      ))}
    </Card>
  );
};
export default Logs;
