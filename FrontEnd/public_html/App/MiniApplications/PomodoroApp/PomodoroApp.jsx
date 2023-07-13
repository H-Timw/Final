/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Layout, Space, Typography } from "antd";
import { useState } from "react";
const { Header, Content } = Layout;
const { Title } = Typography;

import { SettingOutlined } from '@ant-design/icons';
import Setting from "./PomodoroTimer/Setting/Setting";
import PomodoroTimer from "./PomodoroTimer/PomodoroTimer";
import PomodoroTask from "./Task/PomodoroTask";

export default function PomodoroApp({currentContent, statusOverTime, timerMode, setTimerMode}) {
  const [pomodoro,setPomodoro] = useState(30);
  const [shortBreak,setShortBreak] = useState(5);
  const [longBreak,setLongBreak] = useState(15);
  const [isPause,setIsPause] = useState(true);
  const [setting,setSetting] = useState(false);
  const [isSkip, setIsSkip] = useState(false);
  const [autoMode,setAutoMode] = useState(false);
  const [darkMode,setDarkMode] = useState(false);


  return (
    <Space 
      direction="vertical" 
      style={{
        display: currentContent == '/' ? "block" : "none",
        width: "100%",
        minHeight: "100%",
        rowGap: 0,
        backgroundColor: "transparent",
        position:'relative'
      }}
      >
      <Space direction="vertical"
      align="center"
      style={{width: '28%', position:"absolute", left:30,top:"300px", display: "flex", flexDirection:"column", alignItems:"flex-start", textAlign:'justify'}}
      >
        <Title level={3}>Sau khi bấm Start sẽ có nút Skip.</Title>
        <Title level={4}>Nút skip đang được cài đặt để mở thông báo để tiện cho việc test thông báo mà không cần chờ quá lâu</Title>
        <Title level={4}>Ứng dụng Pomodoro có khả năng chạy ngầm và gửi thông báo khi hết giờ</Title>
        <Title level={4}>
            Ý tưởng của việc chạy ngầm này đến từ việc cả website này phục vụ mục đích đếm giờ học tập và nghỉ ngơi của người dùng, có các app tính toán để hỗ trợ làm việc, các trò chơi để giải trí, check thời gian, thời tiết để lên lịch và hẹn với nhiều người,...
            Trong khi mở các submenu khác, nếu chọn các nút bấm mang tính chất "quay lại học" ở mục thông báo sẽ được đưa về màn hình pomodoro
        </Title>
      </Space>
      <Space direction="vertical"
      align="center"
      style={{width: '28%', position:"absolute", right:30,top:"300px", display: "flex", flexDirection:"column", alignItems:"flex-start", textAlign:'justify'}}
      >
        <Title level={3}>The skip button is displayed after pressing start ...</Title>
        <Title level={4}>The skip button is being set to open notifications to facilitate notification testing without waiting too long</Title>
        <Title level={4}>The Pomodoro app has the ability to run in the background and send notifications when the timer runs out</Title>
        <Title level={4}>
          This idea comes from the fact that this website serves the purpose of counting users' study and rest hours, has calculation apps to support work, games for entertainment,  time check, weather to schedule and make appointments with many people,...
          While opening other submenus, if the "back to study" buttons are selected in the notification section, it will be returned to the pomodoro screen
        </Title>
      </Space>
      <Space
        direction="vertical"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: 'transparent',
          rowGap: 0,
        }}
        align="center">
        <Layout style={{
          backgroundColor: 'transparent',
          minHeight: "100%",
          padding: "3rem"}}>
          <Header
            style={{ 
            textAlign: "center",
            color: "#000",
            backgroundColor: 'transparent',
            minWidth: '400px',
            }}
          >
            <Title level={1} strong style={{position:'relative',margin:0}}>
              Pomodoro
              <Button
                type="text"
                shape="square"
                style={{
                  position:'absolute',
                  right:0,
                  top:'60%',
                  transform:'translateY(-50%)'
                }}
                onClick={()=>setSetting(true)}
                icon={<SettingOutlined />}
              ></Button>
            </Title>
          </Header>
          <Content
            style={{
              textAlign: "center",
              color: "#000",
              backgroundColor: 'rgba(255, 255, 255,0.1)',
              borderRadius: '2rem'
            }}
          >
            <Setting {...{setting, setSetting, pomodoro, shortBreak, longBreak, setPomodoro, setShortBreak, setLongBreak, autoMode, darkMode, setAutoMode, setDarkMode}}></Setting>
            <PomodoroTimer {...{pomodoro, shortBreak, longBreak, timerMode, setTimerMode, isPause, setIsPause, statusOverTime, isSkip, setIsSkip, autoMode}} />
          </Content>
        </Layout>
      </Space>
      <Space
        direction="vertical"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: 'transparent',
          rowGap: 0,
        }}
        align="center"
      >
        <Layout
          style={{ 
            backgroundColor: 'transparent',
            minHeight: "100%",
            padding: "3rem"
          }}
        >
          <Header
            style={{
              textAlign: "center",
              color: "#000",
              backgroundColor: 'transparent'
            }}
          >
          <Title level={1} strong style={{margin:0}}>
            TodoList
          </Title>
          </Header>
          <Content
            style={{
              textAlign: "center",
              color: "#000",
              backgroundColor: 'rgba(255, 255, 255,0.1)',
              borderRadius: '2rem'
            }}
          >
            <PomodoroTask />
          </Content>
        </Layout>
      </Space>
    </Space>
  );
}
