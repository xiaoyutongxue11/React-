import "./ConfirmModal.css";
import Card from "../Card/Card";
const ConfirmModal = () => {
  return (
    <Card className="confirmModal">
      <div className="confirmText">删除后不可恢复，确认进行吗？</div>
      <div className="confirmButton">
        <button className="confirm">确认</button>
        <button className="cancel">取消</button>
      </div>
    </Card>
  );
};
export default ConfirmModal;
