import React from "react";
import "./LogItem.css";
import data from "../../data.js";
const LogItem = () => {
  return data.map((item) => {
    return (
      <div className="item" key={item.id}>
        <div className="date">
          <div className="month">{item.month}</div>
          <div className="day">{item.day}</div>
        </div>
        <div className="content">
          <h2 className="desc">{item.desc}</h2>
          <div className="time">{item.time}分钟</div>
        </div>
      </div>
    );
  });
};

export default LogItem;
