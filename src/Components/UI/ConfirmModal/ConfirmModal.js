import "./ConfirmModal.css";
import Card from "../Card/Card";
import BackDrop from "../BackDrop/BackDrop";
const ConfirmModal = (props) => {
  return (
    <BackDrop onCancel={props.onCancel}>
      <Card className="confirmModal">
        <div className="confirmText">{props.confirmText}</div>
        <div className="confirmButton">
          <button className="confirm" onClick={props.onConfirm}>
            确认
          </button>
          <button className="cancel" onClick={props.onCancel}>
            取消
          </button>
        </div>
      </Card>
    </BackDrop>
  );
};
export default ConfirmModal;
