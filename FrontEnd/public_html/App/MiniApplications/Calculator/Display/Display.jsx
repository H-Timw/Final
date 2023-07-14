import "./Display.css";
export default function Display(parameter) {
  return (
    <div className="display">
      <div className="unchange-data">
        <div className="result">{parameter.result}</div>
      </div>
      <div className="operand">{parameter.operand}</div>
    </div>
  );
}
