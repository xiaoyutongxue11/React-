//日志组件
import LogItem from "../LogItem/LogItem";
import "./Logs.css";
import Card from "../../UI/Card/Card";
import LogFilter from "../LogFilter/LogFilter";
import { useState } from "react";
const Logs = (props) => {
  const [year, setYear] = useState(new Date().getFullYear());
  let filterData = props.logsData.filter(
    (item) => item.date.getFullYear() === year
  );
  console.log(1, filterData);
  console.log(2, props.logsData);
  console.log(year);
  const logsData = filterData.map((item) => (
    <LogItem
      data={item}
      key={item.id}
      onDeleteLog={() => props.onDeleteLog(item.id)}
    />
  ));
  const nullData = <p className="nullData">没有找到学习记录</p>;
  const changeYear = (value) => {
    setYear(value);
  };
  return (
    <Card className="logs">
      <LogFilter year={year} onChangeYear={changeYear} />
      {filterData.length === 0 ? nullData : logsData}
    </Card>
  );
};
export default Logs;
