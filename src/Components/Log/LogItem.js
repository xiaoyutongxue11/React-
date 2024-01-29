import React from "react";
import "./LogItem.css";
import MyDate from "../MyDate/MyDate.js";
import Card from "../UI/Card/Card.js";
const LogItem = (props) => {
  const deleteLogItem = () => {
    const isDelete = window.confirm("该操作不可撤回，确认删除吗？");
    if (isDelete) {
      props.onDeleteLog();
    }
  };
  return (
    <Card className="item">
      <MyDate date={props.data.date} />
      <div className="content">
        <h2 className="desc">{props.data.desc}</h2>
        <div className="time">{props.data.time}分钟</div>
      </div>
      <div>
        <div className="delete" onClick={deleteLogItem}>
          x
        </div>
      </div>
    </Card>
  );
};

export default LogItem;
