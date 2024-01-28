//日志组件
import LogItem from "./LogItem";
import "./Logs.css";
import Card from "../UI/Card/Card";
const Logs = (props) => {
  return (
    <Card className="logs">
      {props.logsData.map((item) => (
        <LogItem data={item} key={item.id} />
      ))}
    </Card>
  );
};
export default Logs;
