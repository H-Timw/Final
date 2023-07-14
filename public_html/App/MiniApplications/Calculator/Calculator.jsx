import { useState } from "react";
import { Space, Typography } from "antd";

import "./Calculator.css";
import Display from "./Display/Display";
import ContentCalculator from "./Content/Content";
import ConvertRate from "./ConvertRate/ConvertRate";

export default function Calculator() {
  const [result, updateResult] = useState("");
  const [operation, updateOperation] = useState("");
  const [operand, updateOperand] = useState("");
  return (
    <Space
      direction="vertical"
      size="large"
      align="center"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "pink",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Space>
        <Typography.Title level={2}>Your Calculator</Typography.Title>
      </Space>
      <Space
        direction="horizontal"
        size="large"
        align="start"
        style={{
          padding: 20,
          borderRadius: 10,
          border: "1px solid",
        }}
      >
        <Space
          direction="vertical"
          style={{
            padding: 20,
            borderRight: "1px solid",
          }}
        >
          <Display {...{ result, operation, operand }}></Display>
          <ContentCalculator
            {...{
              result,
              operation,
              operand,
              updateResult,
              updateOperation,
              updateOperand,
            }}
          ></ContentCalculator>
        </Space>
        <Space direction="vertical" align="center">
          <Typography.Title level={4}>Currency Converter</Typography.Title>
          <ConvertRate />
        </Space>
      </Space>
    </Space>
  );
}
