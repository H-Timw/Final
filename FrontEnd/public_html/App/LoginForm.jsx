/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Typography, Space, Input, Button } from "antd";
import { UnlockOutlined, UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

// eslint-disable-next-line react/prop-types
function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        padding: "60px 32px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid grey",
        borderRadius: "10px",
        width: "380px",
        height: "420px",
        margin: "auto",
        marginTop: 120,
      }}
    >
      <Title level={1} style={{ marginBottom: 60 }}>
        Login
      </Title>
      <hr />
      <Space direction="vertical">
        <Space style={{ marginBottom: 20 }}>
          <Title level={5} style={{ width: 90 }}>
            Username:
          </Title>
          <Input
            prefix={<UserOutlined />}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Space>
        <Space style={{ marginBottom: 60 }}>
          <Title level={5} style={{ width: 90 }}>
            Password:
          </Title>
          <Input
            prefix={<UnlockOutlined />}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Space>
        <Space style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="primary"
            onClick={async () => {
              console.log("submit");
              onSubmit(username, password);
            }}
            style={{ marginRight: 20 }}
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              setUsername("");
              setPassword("");
            }}
          >
            Reset
          </Button>
        </Space>
      </Space>
      <Space
        direction="vertical"
        align="center"
        style={{
          width: "40%",
          position: "absolute",
          right: 30,
          top: "700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Title level={3}>Accounts to check full user information:</Title>
        <Title level={4}>+ username: "timw" - password: "timw"</Title>
        <Title level={4}>+ username: "hao" - password: "hao"</Title>
        <Title level={4}>
          + If you do not use 1 of the above 2 accounts, the avatar and some
          information will default to guests. However, app features are still
          open for guest accounts
        </Title>
      </Space>
      <Space
        direction="vertical"
        align="center"
        style={{
          width: "40%",
          position: "absolute",
          left: 40,
          top: "700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Title level={3}>
          Các tài khoản để check đầy đủ thông tin đăng nhập:
        </Title>
        <Title level={4}>+ username: "timw" - password: "timw"</Title>
        <Title level={4}>+ username: "hao" - password: "hao"</Title>
        <Title level={4}>
          + Nếu không sử dụng 1 trong 2 tài khoản trên, avatar và một số thông
          tin sẽ mặc định là khách. Tuy vậy các tính năng app vẫn đang được mở
          cho cả tài khoản khách
        </Title>
      </Space>
    </div>
  );
}
export default LoginForm;
