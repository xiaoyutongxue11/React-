import React from "react";
import "./LogItem.css";
import MyDate from "../MyDate/MyDate.js";
import Card from "../UI/Card";
const LogItem = (props) => {
    return (
      <Card className="item">
        <MyDate date={props.data.date}/>
        <div className="content">
          <h2 className="desc">{props.data.desc}</h2>
          <div className="time">{props.data.time}分钟</div>
        </div>
      </Card>
    );
};

export default LogItem;
