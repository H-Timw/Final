import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
const { Item, List, ErrorList } = Form;
import "./PomodoroTask.css";

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};
const PomodoroTaskLayout = {
  minWidth: "40rem",
  minHeight: "100%",
  height: "auto",
  rowGap: 0,
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
  paddingTop: "2rem",
};
export default function PomodoroTask() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <Space style={PomodoroTaskLayout}>
      <Form
        name="dynamic_form_item"
        {...formItemLayoutWithOutLabel}
        onFinish={onFinish}
        style={{ minWidth: "60rem" }}
      >
        <List
          name="names"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error("At least 2 passengers"));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field) => (
                <Item
                  {...formItemLayoutWithOutLabel}
                  label={""}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  required={false}
                  key={field.key}
                >
                  <Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Write your most target here...",
                      },
                    ]}
                    noStyle
                  >
                    <Input
                      placeholder="Write your target here..."
                      style={{
                        marginLeft: "40px",
                        width: "50%",
                      }}
                    />
                  </Item>
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                </Item>
              ))}
              <Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{
                    width: "50%",
                    margin: 0.5, // set to break line
                  }}
                  icon={<PlusOutlined />}
                >
                  Add Task
                </Button>
                <Button
                  type="dashed"
                  onClick={() => {
                    add("", 0);
                  }}
                  style={{
                    width: "50%",
                    marginTop: "20px",
                  }}
                  icon={<PlusOutlined />}
                >
                  Insert Task
                </Button>
                <ErrorList errors={errors} />
              </Item>
            </>
          )}
        </List>
        <Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </Space>
  );
}
