import React from "react";
import Card from "../UI/Card/Card";
import "./LogsForm.css";
const LogsForm = () => {
  let inputDate = "";
  let inputDesc = "";
  let inputTime = 0;
  const dateChange = (e) => {
    inputDate = e.target.value;
  };
  const descChange = (e) => {
    inputDesc = e.target.value;
  };
  const timeChange = (e) => {
    inputTime = e.target.value;
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const logData = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime,
    };
    console.log(logData);
  };
  return (
    <Card className="logs-form">
      <form onSubmit={formSyubmit}>
        <div className="logs-item">
          <label htmlFor="date">日期</label>
          <input id="date" type="date" onChange={dateChange} />
        </div>
        <div className="logs-item">
          <label htmlFor="desc">内容</label>
          <input id="desc" type="text" onChange={descChange} />
        </div>
        <div className="logs-item">
          <label htmlFor="time">时长</label>
          <input id="time" type="number" onChange={timeChange} />
        </div>
        <div className="logs-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
