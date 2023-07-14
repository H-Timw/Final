/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Cell from "../Cell";
import "./style.css";

function ChessBoard({ size, color1, color2 }) {
  let evenRow = [];
  let oddRow = [];
  for (let i = 0; i < size; i++) {
    evenRow.push(i % 2 == 0 ? color1 : color2);
    oddRow.push(i % 2 == 1 ? color1 : color2);
  }
  let board = [];
  for (let i = 0; i < size; i++) {
    board.push(i % 2 == 0 ? oddRow : evenRow);
  }
  return (
    <div
      className="ChessBoard"
      style={{
        border: "1px solid black",
      }}
    >
      {board.map((row, idx) => {
        return (
          <div className="row" key={idx}>
            {row.map((bgcolor, id) => {
              return <Cell key={id} bgColor={bgcolor} size={size} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
export default ChessBoard;
