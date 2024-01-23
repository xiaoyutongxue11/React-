import React from "react";
import "./LogItem.css";
import data from "../../data.js";
import MyDate from "../MyDate/MyDate.js";
const LogItem = () => {
  return data.map((item) => {
    return (
      <div className="item" key={item.id}>
        <MyDate date={item.date}/>
        <div className="content">
          <h2 className="desc">{item.desc}</h2>
          <div className="time">{item.time}分钟</div>
        </div>
      </div>
    );
  });
};

export default LogItem;
