/* eslint-disable react/prop-types */
import { Modal, Button, Layout, Space, Typography, Form, InputNumber, Switch } from "antd";
import {CloseOutlined} from "@ant-design/icons";
import { useState } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Setting({setting, setSetting, pomodoro, shortBreak, longBreak, setPomodoro, setShortBreak, setLongBreak, autoMode, darkMode, setAutoMode, setDarkMode}){
  //luu gia tri tai setting, chi set khi click ok
  const [pomodoroInSet, settingPomodoro] = useState(pomodoro);
  const [shortBreakInSet, settingShortBreak] = useState(shortBreak);
  const [longBreakInSet, settingLongBreak] = useState(longBreak);
  
  const onCloseModal = () =>{
    setSetting(false);
  };
  const onOkey = () =>{
    setPomodoro(pomodoroInSet);
    setShortBreak(shortBreakInSet);
    setLongBreak(longBreakInSet);
    setSetting(false);
  };
  return(
    <Modal
      open={setting}
      onOk={()=>onOkey()}
      onCancel={()=>onCloseModal()}
      centered
      style={{
        marginLeft: '200px'
      }}
      closable={false}
    >
        <Button
        type="primary"
        style={{
          height:'32px',
          width:'32px',
          padding:'5px 7px',
          borderRadius: '5px',
          position:'absolute',
          right: '20px',
        }}
        shape="square"
        danger
        onClick={()=>onCloseModal()}
        icon={<CloseOutlined />}/>
    <Space
      direction="vertical"
      style={{width: '100%', minHeight:'500px'}}>
    <Layout style={{backgroundColor:'transparent',margin:'20px'}}>
      <Header style={{
        color:'black',
        backgroundColor:'transparent'
        }}>
      <Title level={2}
      strong
      style={{
        color:'black',
        backgroundColor:'transparent',
        textAlign:'center',
      }}>
        Setting
      </Title>
      </Header>
      <Content style={{
        background: 'transparent',
        padding:'20px',
    }}>
      <Form>
        <Title level={4}>Pomodoro:</Title>
        <InputNumber
          min={0}
          controls={true}
          onChange={(value) => settingPomodoro(value)}
          defaultValue={pomodoro}
          />
        <Title level={4}>Short Break:</Title>
        <InputNumber
          min={0}
          controls={true}
          onChange={(value) => settingShortBreak(value)}
          defaultValue={shortBreak}
          />
        <Title level={4}>Long Break:</Title>
        <InputNumber
          min={0}
          controls={true}
          onChange={(value) => settingLongBreak(value)}
          defaultValue={longBreak}
          />
          <Title level={4}>Auto Mode</Title>
        <Switch
            onChange={() => setAutoMode(!autoMode)}
          />
          <Title level={4}>Dark Mode</Title>
        <Switch
            onChange={() => setDarkMode(!darkMode)}
          />
      </Form>
      </Content>
    </Layout>
  </Space>
  </Modal>
  )
}