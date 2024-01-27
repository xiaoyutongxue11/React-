import React from "react";
import Card from "../UI/Card/Card";
import "./LogsForm.css";
import { useState } from "react";
const LogsForm = () => {
  const [inputDate, setInputDate] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputTime, setInputTime] = useState("");
  const dateChange = (e) => {
    setInputDate(e.target.value);
  };
  const descChange = (e) => {
    setInputDesc(e.target.value);
  };
  const timeChange = (e) => {
    setInputTime(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const logData = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime,
    };
    console.log(logData);
    setInputDate("");
    setInputDesc("");
    setInputTime("");
  };
  return (
    <Card className="logs-form">
      <form onSubmit={formSubmit}>
        <div className="logs-item">
          <label htmlFor="date">日期</label>
          <input
            id="date"
            type="date"
            onChange={dateChange}
            value={inputDate}
          />
        </div>
        <div className="logs-item">
          <label htmlFor="desc">内容</label>
          <input
            id="desc"
            type="text"
            onChange={descChange}
            value={inputDesc}
          />
        </div>
        <div className="logs-item">
          <label htmlFor="time">时长</label>
          <input
            id="time"
            type="number"
            onChange={timeChange}
            value={inputTime}
          />
        </div>
        <div className="logs-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
