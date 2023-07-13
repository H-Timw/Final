import { useEffect, useState } from "react";
import { Typography } from 'antd';
const { Title } = Typography;
import './realtime.css'
export default function RealTime(){
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let time = new Date();
      setHours(time.getHours());
      setMinutes(time.getMinutes());
      setSeconds(time.getSeconds());
  },1000)
  });
  return (
    <Title 
    level={2}
    style={{marginTop:'2rem'}}
    >
      {hours < 10? `0${hours}`: `${hours}`}:{minutes < 10? `0${minutes}`: `${minutes}`}:{seconds < 10? `0${seconds}`: `${seconds}`}
    </Title>
  )
}