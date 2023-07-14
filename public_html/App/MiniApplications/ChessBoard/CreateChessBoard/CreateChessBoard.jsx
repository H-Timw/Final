import { useState } from "react";
import { ColorPicker, InputNumber, Space, Typography } from "antd";

import ChessBoard from "../ChessBoard";
import "./CreateChessBoard.css";

export default function CreateChessBoard() {
  let [inputValue, SetInputValue] = useState(0);
  let [color1, setColor1] = useState("#000000");
  let [color2, setColor2] = useState("#ffffff");

  return (
    <Space
      direction="horizontal"
      size="large"
      align="start"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#00bfff",
        padding: 30,
      }}
    >
      <Space
        direction="vertical"
        size="large"
        align="start"
        style={{
          paddingRight: 30,
          borderRight: "1px solid #000000",
        }}
      >
        <Space>
          <Typography.Title level={3} style={{ margin: 0 }}>
            Input Size:{" "}
          </Typography.Title>
          <InputNumber
            value={inputValue}
            min={0}
            max={30}
            onChange={(value) => SetInputValue(value)}
          ></InputNumber>
        </Space>
        <Space>
          <Typography.Title level={3}>Select color Player1: </Typography.Title>
          <ColorPicker
            value={color1}
            format="hex"
            onChange={(value) => setColor1(value.toHexString())}
          />
        </Space>
        <Space>
          <Typography.Title level={3}>Select color Player2: </Typography.Title>
          <ColorPicker
            value={color2}
            format="hex"
            onChange={(value) => setColor2(value.toHexString())}
          />
        </Space>
      </Space>
      <Space
        onClick={() => {
          let colorSwitch = color1;
          setColor1(color2);
          console.log(color1);
          setColor2(colorSwitch);
        }}
      >
        <ChessBoard size={inputValue} color1={color1} color2={color2} />
      </Space>
    </Space>
  );
}
