/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  Space,
  Form,
  Input,
  Typography,
  Tooltip,
  InputNumber,
  Button,
} from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

export default function Quotes({ token }) {
  const [author, setAuthor] = useState(null);
  const [numberOfQuotes, setNumberOfQuotes] = useState(1);
  const [quotes, setQuotes] = useState([]);
  const getSpecificCode = async function () {
    const res = await fetch("http://localhost:3000/quotes", {
      method: "POST",
      body: JSON.stringify({
        num: numberOfQuotes,
        author: author,
      }),
      headers: {
        "Content-type": "application/json",
        token: token,
      },
    });
    const data = await res.json();
    let newQuotes = [];
    data.map((quote) => {
      newQuotes.push({ quote: quote.quote, author: quote.author });
    });
    setQuotes(newQuotes);
  };

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <Space
        direction="vertical"
        align="center"
        style={{
          width: "40%",
          position: "absolute",
          right: 30,
          bottom: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Text>
          The author suggestion feature has not been completed, you can try
          searching for the author name by copying the author name of the random
          quote or some of the following values:
        </Text>
        <Text>+ Henry Ford - max 2 quotes found</Text>
        <Text>+ Napoleon Hill - 1 quotes found</Text>
        <Text>+ Jesus - 1 quotes found</Text>
        <Text>+ Steve Jobs - max 2 quotes found</Text>
        <Text>+ No input - 1 random quotes found</Text>
      </Space>
      <Space
        direction="vertical"
        align="center"
        style={{
          width: "40%",
          position: "absolute",
          left: 40,
          bottom: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Text>
          Tính năng gợi ý tác giả chưa được hoàn thiện, có thể thử search tên
          tác giả bằng việc copy tên tác giả của quote đã random hoặc một số giá
          trị sau:
        </Text>
        <Text>+ Henry Ford - max 2 quotes found</Text>
        <Text>+ Napoleon Hill - 1 quotes found</Text>
        <Text>+ Jesus - 1 quotes found</Text>
        <Text>+ Steve Jobs - max 2 quotes found</Text>
        <Text>+ Không nhập tên tác giả - 1 random quotes found</Text>
      </Space>
      <Space direction="vertical" align="center">
        <Form layout="vertical" style={{ maxWidth: 600 }}>
          <Space direction="horizontal">
            <Title level={4} style={{ margin: 20 }}>
              Search By Author:
            </Title>
            <Input
              defaultValue={null}
              placeholder="Enter author name"
              onPressEnter={() => getSpecificCode()}
              prefix={<UserOutlined />}
              suffix={
                <Tooltip title="Jesus, Napoleon Hill,...">
                  <InfoCircleOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                    }}
                  />
                </Tooltip>
              }
              onChange={(e) => {
                if (e.target.value.trim() != "") {
                  setAuthor(e.target.value);
                } else {
                  setAuthor(null);
                }
              }}
            />
          </Space>
          <Space>
            <Title level={4} style={{ margin: 20 }}>
              Set number of Quotes
            </Title>
            <InputNumber
              defaultValue={1}
              min={0}
              value={numberOfQuotes}
              onChange={setNumberOfQuotes}
            />
          </Space>
        </Form>
        <Button type="primary" onClick={() => getSpecificCode()}>
          Find Your Quote
        </Button>
      </Space>
      <Space style={{ paddingBottom: 300 }}>
        <Space
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            alignItems: "start",
          }}
        >
          {quotes.map((quote, index) => {
            return (
              <Typography
                key={index}
                style={{
                  margin: 20,
                  border: "1px solid black",
                  minWidth: "10rem",
                }}
              >
                <Title
                  level={5}
                  style={{
                    fontSize: 24,
                    display: "block",
                    minHeight: "100px",
                    padding: 20,
                    margin: 0,
                  }}
                >
                  {quote.quote}
                </Title>
                <hr></hr>
                <Title
                  level={4}
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    margin: "20px 0",
                    textAlign: "center",
                  }}
                >
                  {quote.author}
                </Title>
              </Typography>
            );
          })}
        </Space>
      </Space>
    </Space>
  );
}
