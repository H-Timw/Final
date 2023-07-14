/* eslint-disable react-hooks/exhaustive-deps */
import { InputNumber, Form, Button, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { SwapOutlined } from "@ant-design/icons";
const { Item } = Form;

export default function ConvertRate() {
  const [val1, setval1] = useState(0);
  const [val2, getval2] = useState(0);
  const [tiSo1, setTiSo1] = useState(1);
  const [tiSo2, setTiSo2] = useState(1);
  const [symbol1, setSymbol1] = useState("VND");
  const [symbol2, setSymbol2] = useState("VND");
  const [swap, setSwap] = useState(false);

  const onFinish = () => {
    getval2((val1 * tiSo1) / tiSo2);
  };
  const onFinishFailed = () => {
    console.log("onFinishFailed");
  };
  const getinput1 = (value) => {
    setval1(value);
  };
  const select1 = (value, options) => {
    setTiSo1(value);
    setSymbol1(options.symbol);
  };
  const select2 = (value, options) => {
    setTiSo2(value);
    setSymbol2(options.symbol);
  };
  const swapfc = () => {
    setval1(val2);
    let tmp = tiSo1;
    setTiSo1(tiSo2);
    setTiSo2(tmp);
    onFinish();
  };
  useEffect(() => {
    swapfc();
  }, [swap]);
  const options = [
    {
      key: 1,
      label: "VND",
      value: 1,
      symbol: "VND",
    },
    {
      key: 2,
      label: "USD",
      value: 23000,
      symbol: "$",
    },
    {
      key: 3,
      label: "YEN",
      value: 167.2,
      symbol: "¥",
    },
    {
      key: 4,
      label: "GBP",
      value: 28000,
      symbol: "£",
    },
    {
      key: 5,
      label: "WON",
      value: 17000,
      symbol: "W",
    },
  ];

  return (
    <Form
      name="formconvert"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Space
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Item noStyle>
          <InputNumber addonAfter={symbol1} value={val1} onChange={getinput1} />
          <Select
            defaultValue={{ label: "VND", value: 1 }}
            options={options}
            onSelect={select1}
          />
        </Item>
        <Button onClick={() => setSwap(!swap)}>
          <SwapOutlined />
        </Button>
        <Item noStyle>
          <InputNumber value={val2} addonAfter={symbol2} readOnly />
          <Select
            defaultValue={{ label: "VND", value: 1 }}
            options={options}
            onSelect={select2}
          />
        </Item>
      </Space>
      <Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
}
