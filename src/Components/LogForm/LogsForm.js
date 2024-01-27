import React from "react";
import Card from "../UI/Card/Card";
import "./LogsForm.css";
const LogsForm = () => {
  return (
    <Card className="logs-form">
      <form>
        <div className="logs-item">
          <label htmlFor="date">日期</label>
          <input id="date" type="date" />
        </div>
        <div className="logs-item">
          <label htmlFor="desc">内容</label>
          <input id="desc" type="text" />
        </div>
        <div className="logs-item">
          <label htmlFor="time">时长</label>
          <input id="time" type="number" />
        </div>
        <div className="logs-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
