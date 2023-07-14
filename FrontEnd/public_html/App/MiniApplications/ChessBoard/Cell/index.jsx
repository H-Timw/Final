/* eslint-disable react/prop-types */
import "./style.css";
function Cell({ bgColor, size }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: +size > 12 ? `calc(45vw/${+size})` : "50px", //limit size table to 45vw
        height: +size > 12 ? `calc(45vw/${+size})` : "50px",
        display: "inline-block",
        border: "1px solid black",
      }}
    ></div>
  );
}
export default Cell;
