import { Space, Modal, Button, Typography, Select } from "antd";
import { SettingOutlined, SmileOutlined, MehOutlined } from "@ant-design/icons";

const { Title } = Typography;
import { useState } from "react";
import GameMineSweeper from "./GameMineSweeper/GameMineSweeper";

export default function MineSweeper() {
  const [gameMode, setGameMode] = useState("easy");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStart, reStart] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSelection = (value) => {
    setGameMode(value);
  };
  return (
    <Space
      direction="vertical"
      size="large"
      align="center"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "pink",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Space
        direction="horizontal"
        size="large"
        align="start"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
          borderRadius: 10,
          border: "1px solid",
        }}
      >
        <Space
          style={{
            width: "80vw",
            display: "flex",

            justifyContent: "space-between",
            padding: 20,
            borderRadius: 10,
            border: "1px solid",
          }}
        >
          <Title level={3} style={{ margin: 0, lineHeight: "auto" }}>
            MineSweeper
          </Title>
          <Button type="text" onClick={showModal} icon={<SettingOutlined />} />
        </Space>
        <Button type="primary" onClick={() => reStart(!isStart)}>
          {isStart ? <SmileOutlined /> : <MehOutlined />}
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Title level={5}>Select Game Mode</Title>
          <Select
            defaultValue="easy"
            style={{
              width: 120,
            }}
            onChange={handleSelection}
            options={[
              {
                label: "easy",
                value: "easy",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "hard",
                value: "hard",
              },
              {
                label: "asia",
                value: "asia",
              },
            ]}
          />
        </Modal>
        <Space>
          <GameMineSweeper {...{ gameMode, isStart }} />
        </Space>
      </Space>
    </Space>
  );
}
