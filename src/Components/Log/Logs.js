//日志组件
import LogItem from "./LogItem";
import "./Logs.css";
import Card from "../UI/Card/Card";
const Logs = (props) => {
  const logsData = props.logsData.map((item) => (
    <LogItem
      data={item}
      key={item.id}
      onDeleteLog={() => props.onDeleteLog(item.id)}
    />
  ));
  const nullData = <p className="nullData">没有找到学习记录</p>;
  return (
    <Card className="logs">
      {props.logsData.length === 0 ? nullData : logsData}
    </Card>
  );
};
export default Logs;
