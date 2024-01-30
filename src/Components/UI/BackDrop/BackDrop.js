import "./BackDrop.css";
const BackDrop = (props) => {
  return (
    <div className="backDrop" onClick={props.onCancel}>
      {props.children}
    </div>
  );
};

export default BackDrop;
