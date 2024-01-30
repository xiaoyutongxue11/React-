import React from "react";
import "./MyDate.css";
const MyDate = (props) => {
  const month=props.date.toLocaleString('zh-CN',{month:"long"});
  const day=props.date.getDate();
  return (
    <div className="date">
      <div className="month">{month}</div>
      <div className="day">{day}</div>
    </div>
  );
};

export default MyDate;
