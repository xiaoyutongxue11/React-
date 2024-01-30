import React from "react";
import "./LogItem.css";
import MyDate from "../../UI/MyDate/MyDate.js";
import Card from "../../UI/Card/Card.js";
import { useState } from "react";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal.js";
const LogItem = (props) => {
  const deleteLogItem = () => {
    setShowConfirmModal(true);
  };
  const cancel = () => {
    setShowConfirmModal(false);
  };
  const confirm = () => {
    props.onDeleteLog();
    setShowConfirmModal(false);
  };
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const confirmText = "删除后不可恢复，确认进行吗？";
  return (
    <Card className="item">
      {showConfirmModal && (
        <ConfirmModal
          confirmText={confirmText}
          onCancel={cancel}
          onConfirm={confirm}
        />
      )}
      <MyDate date={props.data.date} />
      <div className="content">
        <h2 className="desc">{props.data.desc}</h2>
        <div className="time">{props.data.time}分钟</div>
      </div>
      <div>
        <div className="delete" onClick={deleteLogItem}>
          ×
        </div>
      </div>
    </Card>
  );
};

export default LogItem;
