/* eslint-disable react/prop-types */
import { StepForwardOutlined } from "@ant-design/icons";
import { Button } from "antd";
export default function ButtonSkip({ isPause, isSkip, setIsSkip }) {
  return (
    <Button
      type="text"
      onClick={() => setIsSkip(!isSkip)}
      style={{
        position: "absolute",
        top: "0.5rem",
        right: "-3.5rem",
        color: "white",
        scale: "1.5",
        display: isPause ? "none" : "inline",
      }}
      icon={<StepForwardOutlined />}
    ></Button>
  );
}
