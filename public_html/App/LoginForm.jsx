/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Typography, Space, Input, Button, Form, Checkbox } from "antd";
const { Item } = Form;
import { UnlockOutlined, UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

function LoginForm({ onSubmit }) {
  const [form] = Form.useForm();
  const onFinish = (values) => {onSubmit(values.username, values.password)};
  const onFinishFailed = () => {
    window.alert("Please Fill All Of Form To Login!!!");
  };
  const onReset = () => {
    form.resetFields();
  };
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
      <Form
        name="basic"
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed} // chua can lam
        autoComplete="off"
      >
        <Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined style={{marginRight:10}}/>} style={{marginLeft:5}}/>
        </Item>

        <Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password prefix={<UnlockOutlined style={{marginRight:10}}/>} style={{marginLeft:5}} />
        </Item>

        <Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Item>
        <Space style={{display:'flex', justifyContent:"space-evenly", padding:"0 50px"}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form>
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
