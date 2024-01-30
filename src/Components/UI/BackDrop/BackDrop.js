import "./BackDrop.css";
import ReactDom from "react-dom";
const BackDrop = (props) => {
  const backdropRoot = document.getElementById("backdrop-root");
  return ReactDom.createPortal(
    <div className="backDrop" onClick={props.onCancel}>
      {props.children}
    </div>,
    backdropRoot
  );
};

export default BackDrop;
