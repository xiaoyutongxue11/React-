import "./LogFilter.css";
const LogFilter = (props) => {
  const currentYear = new Date().getFullYear();
  const onYearChange = (e) => {
    props.onChangeYear(+e.target.value);
  };
  return (
    <div>
      年份：
      <select className="logFilter" onChange={onYearChange} value={props.year}>
        <option value={`${currentYear}`}>{currentYear}</option>
        <option value={`${currentYear - 1}`}>{currentYear - 1}</option>
        <option value={`${currentYear - 2}`}>{currentYear - 2}</option>
        <option value={`${currentYear - 3}`}>{currentYear - 3}</option>
      </select>
    </div>
  );
};
export default LogFilter;
