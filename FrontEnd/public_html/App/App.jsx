/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Layout, Space, Menu, notification, Button, Avatar, Typography, Image } from "antd";
import { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';
//import component
import MineSweeper from './MiniApplications/MineSweeper/MineSweeper'
import CreateChessBoard from "./MiniApplications/ChessBoard/CreateChessBoard/CreateChessBoard";
import PomodoroApp from './MiniApplications/PomodoroApp/PomodoroApp'
import Calculator from "./MiniApplications/Calculator/Calculator";
import Setting from "./SettingApp/Setting";
import Quotes from "./MiniApplications/Quotes/Quotes";
import Tartot from "./MiniApplications/Tarot/Tarot";
import LoginForm from "./LoginForm";
import Weather from "./MiniApplications/Weather/Weather";
import WorlTime from "./MiniApplications/WorldTime/WorldTime";
//import img, icon
import congratulation from "../assets/imgs/congratulation.png";
import enjoybreak from "../assets/imgs/enjoy.png";
import avtTimw from "../assets/imgs/avtTimw.jpg";
import avtHao from "../assets/imgs/avtHao.jpg";
import logoKITSBGWhite from "../assets/imgs/logo-kits-bg-white.jpg";
import logoKITSBGBlue from "../assets/imgs/logo-kit-bg-blue.png";
import gameIcon from "../assets/imgs/game-icon.png";
import studying from "../assets/imgs/studying.png";
import mystic from "../assets/imgs/mystic.png";
import quotes from "../assets/imgs/quotes.png";
import tarot from "../assets/imgs/tarot.png";
import weatherIcon from "../assets/imgs/weather-icon.png";
import planIcon from "../assets/imgs/plan-icon.png";
import earthTime from "../assets/imgs/earth-time.png";
//css
import "./App.css"
import { HourglassOutlined, TableOutlined, CalculatorOutlined, AppstoreAddOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";


const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;


export default function App() {
  const [theme, setTheme] = useState("dark");
  const [colorTextByTheme, setColorText] = useState("white");
  const [currentContent, setCurrentContent] = useState(location.pathname);
  const [timerMode, setTimerMode] = useState('Pomodoro');
  const [overTime,statusOverTime] = useState(false);
  const [language, changeLanguage] = useState("us");
  const [collapsed, setCollapsed] = useState(false);
  const [profile, setProfile] = useState(null);


  //change text color white theme change
  useEffect(()=>{
    theme == "dark" ? setColorText("white") : setColorText("black");
  },[theme])
  //styles
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    letterSpacing: "1px",
    overflowY: "scroll",
    backgroundColor: currentContent == '/' ? (timerMode=='Pomodoro'? '#BA4949': timerMode=='Short Break'? '#38858A': '#397097') : 'white',
  };
  const siderStyle = {
    textAlign: "center",
    padding: "0 10px 40px 10px",
    // paddingBottom:40,
    backgroundColor: theme=="dark"? "#0B3B61":"white",
  };
  const styleIconMenu = {
    width: 20, height: 20, marginLeft: collapsed ? 12 : 0, marginRight:10
  }
  const styleIconSubMenu = collapsed?{ width: 20, height: 20, marginRight: 30 }:{ width: 14, height: 14, marginRight: 10 }
  //function get item menu
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem( 
      <Typography>
        <Space>
          <Image preview={false} style={styleIconMenu} src={studying} />
          {!collapsed && <Text type="secondary" style={{fontSize:16, color:"#818CF8"}}>{language=="us"?`LEARNING`: `Học Tập`}</Text>}
        </Space>
        {!collapsed && <Text
          type="secondary"
          style={{ fontSize:12, color: theme == "dark" ? "white" : "black"}}>
          <nobr>{language=="us"?`Your Workspace`: `Tập trung với công việc`}</nobr>
        </Text>}
      </Typography>,
      "group1",
      null,
      [
        getItem(<Link to="/">{language=="us"?`Pomodoro Timer`: `Đồng hồ Pomodoro`}</Link>, "/", <HourglassOutlined />,),
        getItem(<Link to="/calculator">{language=="us"?`Calculator`: `Máy tính cá nhân`}</Link>, "/calculator", <CalculatorOutlined />,)
      ],
      "group",
      ),
    getItem(
      <Typography>
        <Space>
          <Image preview={false} style={styleIconMenu} src={gameIcon} />
          {!collapsed && <Text style={{fontSize:16,color:"#818CF8"}}>{language=="us"?`APPLICATIONS`: `Giải Trí`}</Text>}
        </Space>
        {!collapsed && <Text
          type="secondary"
          style={{ fontSize:12, color: theme == "dark" ? "white" : "black"}}>
          <nobr>{language=="us"?`Enjoy Your Breaktime`: `Khu vực thư giãn của riêng bạn`}</nobr>
        </Text>}
      </Typography>,
      "group2",
      null,
      [
        getItem(<Link to="/chessboard">{language=="us"?`ChessBoard`: `Bàn cờ đổi màu`}</Link>, "/chessboard", <AppstoreAddOutlined />,),
        getItem(<Link to="/minesweeper">{language=="us"?`MineSweeper`: `Dò mìn`}</Link>, "/minesweeper", <TableOutlined />,),
      ],
      "group",
    ),
    getItem( 
      <Typography>
        <Space>
          <Image preview={false} style={styleIconMenu} src={mystic} />
          {!collapsed &&<Text type="secondary" style={{fontSize:16, color:"#818CF8"}}>{language=="us"?`SPIRITUAL`: `Thần bí`}</Text>}
        </Space>
        <Text
          type="secondary"
          style={{ fontSize:12, color: theme == "dark" ? "white" : "black", display: collapsed ? "none" : "block",}}>
          <nobr>{language=="us"?`Receiving Cosmic Signals`: `Đón nhận tín hiệu vũ trụ`}</nobr>
        </Text>
      </Typography>,
      "group3",
      null,
      [
        getItem(<Link to="/quotes">{language=="us"?`Random Quote`: `Câu nói ngẫu nhiên`}</Link>, "/quotes",
          <Image
            preview={false}
            style={styleIconSubMenu} src={quotes}
          />,
        ),
        getItem(<Link to="/tarot">{language=="us"?`Random Tarot`: `Thẻ bài Tarot ngẫu nhiên`}</Link>, "/tarot",
          <Image
            preview={false}
            style={styleIconSubMenu} src={tarot}
          />,
        )
      ],
      "group",
      ),
      getItem( 
        <Typography>
          <Space>
            <Image preview={false} style={styleIconMenu} src={planIcon} />
            {!collapsed &&<Text type="secondary" style={{fontSize:16, color:"#818CF8"}}>{language=="us"?`PLANNING`: `Kế hoạch làm việc`}</Text>}
          </Space>
          {!collapsed && <Text
            type="secondary"
            style={{ fontSize:12, color: theme == "dark" ? "white" : "black"}}>
            <nobr>{language=="us"?`Support your plan`: `Hỗ trợ bạn lên kế hoạch`}</nobr>
          </Text>}
        </Typography>,
        "group4",
        null,
        [
          getItem(<Link to="/weather">{language=="us"?`Weather`: `Thời tiết`}</Link>, "/weather",
            <Image
              preview={false}
              style={styleIconSubMenu} src={weatherIcon}
            />,
          ),
          getItem(<Link to="/worldtime">{language=="us"?`World Time`: `Thời gian toàn cầu`}</Link>, "/worldtime",
            <Image
              preview={false}
              style={styleIconSubMenu} src={earthTime}
            />,
          )
        ],
        "group",
      ),
  ];

  //notification when timeover pomodoro
  const [api, contextHolder] = notification.useNotification();
  const close = () => {
    console.log(
      "Notification was closed.",
    );
  };
  const openNotificationPomodoro = () => {
    const key = `open${Date().now}`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy(key)}>
          {language=="us"?`Continue`: `Tiếp tục học tập`}
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          {language=="us"?`Take a rest`: `Nghỉ ngơi`}
        </Button>
      </Space>
    );
    api.open({
      icon: (
        <a href="https://www.flaticon.com/free-icons/enjoy" title="enjoy icons">
          <Image style={{ width: 60, height: 60, marginTop: 10 }} src={congratulation} />
        </a>),
      message: <p style={{ paddingLeft: 40 }}>
        {language=="us"?`You "ve finish a section successfully!`: `Xuất sắc!!! Bạn vừa hoàn thành một chu kỳ!`}
        </p>,
      description:
        <p style={{ paddingLeft: 40 }}>
          {language=="us"?`Wanna continue ?`: `Tiếp tục cố gắng chứ?`}
        </p>,
      btn,
      key,
      duration: 0,
      onClose: close,
    });
  };

  const onSubmitNoti = (key) =>{
    api.destroy(key);
    setCurrentContent("/");
    setTimerMode('Long Break');
  }

  const openNotificationShortBreak = () => {
    const key = `open${Date().now}`;
    const btn = (
      <Space>
        <Link to="/">
          {/* click continue thi quay lai man hinh pomodoro */}
          <Button type="link" size="small" onClick={() => onSubmitNoti(key)}>
            {language=="us"?`Continue Pomodoro`: `Quay lại học tập`}
          </Button>
        </Link>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          {language=="us"?`Play More`: `Giải trí thêm`}
        </Button>
      </Space>
    );
    api.open({
      icon: (
        <a href="https://www.flaticon.com/free-icons/enjoy" title="enjoy icons">
          <Image style={{ width: 60, height: 60, marginTop: 10 }} src={enjoybreak} />
        </a>
      ),
      message: <p style={{ paddingLeft: 40 }}>{language=="us"?`Enjoy your break time?`: `Một khoảng nghỉ ngơi tuyệt vời chứ?`}</p>,
      description: <p style={{ paddingLeft: 40 }}>{language=="us"?`Remember to comeback with your target!!!`: `Hãy nhớ tới mục tiêu của mình nào!!!`}</p>,
      btn,
      key,
      duration: 0,
      onClose: close,
    });
  };

  //check time PomodoroApp
  useEffect(() => {
    if (overTime && timerMode == 'Pomodoro') {
      openNotificationPomodoro();
    }
    if (overTime && timerMode == 'Short Break') {
      openNotificationShortBreak();
    }
    if (overTime && timerMode == 'Long Break') {
      openNotificationShortBreak();
    }
    statusOverTime(false);
  }, [overTime, timerMode]);
  //user authentication
  const [token, setToken] = useState(null);
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  if ((!token || !token.length ) && pathname !== '/login') {
    navigate("/");
  }
  useEffect(()=>{
    if(token!=null){
      setProfile(jwtDecode(token));
      setCurrentContent('/');
    }
  },[token])
  const logOut = () =>{
    setToken(null);
    navigate("/");
  }

  return (
    <>
    {token?(
      <Space
        direction="vertical"
        size="large"
        style={{ display: "block", minHeight: "100vh", width: "100vw" }}
      >
        <Layout
          theme={theme}
          hasSider={true}
        >
          {profile && <Sider theme={theme} style={siderStyle} collapsible collapsed={collapsed} trigger={null}>
            {(profile.username=="timw" || profile.username=="hao") &&
              <Avatar
                style={{width: collapsed ? 50 : 100, height: collapsed ? 50 : 100, marginTop:30}}
                src={profile.username=="timw"? avtTimw : avtHao} />
            }
            {!(profile.username=="timw" || profile.username=="hao")&&
              <Avatar
              style={
                collapsed?
                {
                  width: 50,
                  height: 50,
                  marginTop:30,
                  fontSize: 12,
                  paddingTop: 10,
                }:{
                  width: 100,
                  height: 100,
                  marginTop: 30,
                  fontSize: 20,
                  paddingTop: 35
                }
                }
              >
                {(language=="us"?"Guest": "Khách")}
              </Avatar>
            }
              <Typography style={{ marginBottom: 20 }}>
                <Title
                  level={collapsed ? 5 : 4}
                  style={{
                    color: colorTextByTheme,
                    padding: 10,
                  }} >
                    {
                    profile.username=="timw"?
                      "Timw"
                      :(profile.username=="hao"?
                        (language=="us"?"Minh Hao": "Minh Hào")
                        :(language=="us"?"Guest": "Khách")
                      )
                    }
                </Title>
                <Text
                  type="secondary"
                  style={{
                    color: colorTextByTheme,
                    display: collapsed ? "none" : "block",
                  }}>
                    Email:  {
                    profile.username=="timw"?
                      "Timw051201@gmail.com"
                      :(profile.username=="hao"?
                        "Doanminhhaonbk@gmail.com"
                        :(language=="us"?"Email Uncheck": "Chưa đăng ký email")
                      )
                    }
                </Text>
                {(profile.username=="timw" || profile.username=="hao") &&<Text
                  type="secondary"
                  style={{
                    color: colorTextByTheme,
                    display: collapsed ? "none" : "block",
                  }}>
                  {(language=="us"?"Company:  ": "Công ty:  ")}{profile.company}
                </Text>}
                {(profile.username=="timw" || profile.username=="hao") &&<Text
                  type="secondary"
                  style={{
                    color: colorTextByTheme,
                    display: collapsed ? "none" : "block",
                  }}>
                  {(language=="us"?"Position:  ": "Vị trí:  ")}{profile.position}
                </Text>}
              </Typography>
              {!collapsed && 
                  <Button
                    type={theme=="dark"?"primary":"default"}
                    danger
                    style={{margin:0, marginBottom: 20,fontSize:13, borderRadius: 20}}
                    onClick={()=>logOut()}
                  >
                    LOG OUT
                  </Button>
              }
              <Menu
                theme={theme}
                mode="vertical"
                onSelect={(e) => setCurrentContent(e.key)}
                defaultSelectedKeys={[currentContent]}
                items={items}
                style={{ textAlign: "justify",backgroundColor: theme=="dark"? "#0B3B61":"white",}}
              />
            </Sider>
          }
          <Layout theme={theme}
            style={{ minHeight: "100vh", width: "100%" }}
            hasSider={false}>
            <Header
              style={{
                width: "100%",
                display:"flex",
                justifyContent:"space-between",
                backgroundColor: theme == "dark" ? "#0B3B61" : "white",
              }}
            >
              <Button
                type="text"
                icon={
                  collapsed ? <MenuUnfoldOutlined style={{color: theme == "dark" ? "white" : "black",}} />
                            :<MenuFoldOutlined style={{color: theme == "dark" ? "white" : "black",}} />
                }
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                  marginLeft: -50,
                }}
              />
              <Space>
                <Image preview={false} style={{ width: 40 , height: 40 }} src={theme=="dark"?logoKITSBGBlue:logoKITSBGWhite} />
                <Title level={3} 
                style={{lineHeight: "64px",margin:0, marginLeft:15,color: colorTextByTheme }}>
                  {language=="us"?`KITS Final FrontEnd`: `Đồ án tốt nghiệp FrontEnd KITS`}
                  </Title>
              </Space>
              <Space>
                  <Setting {...{language, changeLanguage, colorTextByTheme, theme, setTheme}}></Setting>
              </Space>
            </Header>
            <Content style={contentStyle}>
              {contextHolder}
              <PomodoroApp {...{currentContent, statusOverTime, timerMode, setTimerMode}}></PomodoroApp>
              <Routes>
                <Route path="/calculator" Component={Calculator} />
                <Route path="/chessboard" Component={CreateChessBoard} />
                <Route path="/minesweeper" Component={MineSweeper} />
                <Route path="/quotes" Component={()=><Quotes {...{token}}/>} />
                <Route path="/tarot" Component={()=><Tartot {...{token}}/>} />
                <Route path="/weather" Component={Weather} />
                <Route path="/worldtime" Component={WorlTime} />
                <Route path="/" Component={Outlet} />
              </Routes>
            </Content>
            <Footer
            style={{
              textAlign: "center",
              color: colorTextByTheme,
              backgroundColor: theme == "dark" ? "#0B3B61" : "white",
            }}
          >
            {language=="us"?`Copyright by TIMW ${String.fromCodePoint(0x00A9)} 2023`:`Thực hiện bởi Đoàn Minh Hào - KITS-4 - 2023`}
          </Footer>
          </Layout>
        </Layout>
        <Outlet />
      </Space>
    ):<Routes>
      <Route
        path="/"
        element={
          <LoginForm 
            onSubmit={async (username, password) => {
              const response = await fetch('http://localhost:3000/authenticate', {
                  method: 'POST', 
                  headers: {
                      'Content-Type': 'application/json',
                  }, 
                  body: JSON.stringify({username, password})
              });
              const {token} = await response.json();
              setToken(token);
            }}
          />
        }
      />
    </Routes>
  }
    </>
  )
}