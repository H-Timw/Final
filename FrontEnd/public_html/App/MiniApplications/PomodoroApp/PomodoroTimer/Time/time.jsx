/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import './time.css';
import { Typography } from "antd";
const { Title } = Typography;
export default function Timer({pomodoro, shortBreak, longBreak, timerMode, setTimerMode, isPause, setIsPause, isSkip, statusOverTime, autoMode}){
  const [hour, countHour] = useState(Math.floor(pomodoro/60));
  const [min, countMinutes] = useState(pomodoro);
  const [sec, countSeconds] = useState(0);
  useEffect(()=>{
      countHour(0);
      countMinutes(0);
      countSeconds(0);
  },[isSkip])

  //neu thay doi setting time thi cai dat lai thoi gian
  useEffect(()=>{
    switch(timerMode){
      case 'Pomodoro':
        countHour(Math.floor(+pomodoro/60));
        countMinutes(Math.floor(+pomodoro%60));
        countSeconds(0);
        break;
      case 'Short Break':
        countHour(Math.floor(+shortBreak/60));
        countMinutes(Math.floor(+shortBreak%60));
        countSeconds(0);
        break;
      case 'Long Break':
        countHour(Math.floor(+longBreak/60));
        countMinutes(Math.floor(+longBreak%60));
        countSeconds(0);
        break;
    }
    if(autoMode){setIsPause(false)}else{setIsPause(true)}
  },[longBreak, pomodoro, shortBreak, timerMode]);

  // dieu kien dem nguoc
  useEffect(()=>{
    let timecount = setTimeout(()=>{
      if(!isPause && (hour!=0 || min!=0 || sec!=0)){
        if(min == 0 && sec==0){
          countHour(hour-1);
          countMinutes(59);
          countSeconds(59);
        }else{
          if(sec == 0){
            countMinutes(min-1);
            countSeconds(59);
          }else{
            countSeconds(sec-1);
          }
        }
      }
      if(hour == 0 && min == 0 && sec == 0){
        statusOverTime(true);
        if(timerMode == 'Pomodoro'){
          setTimerMode('Short Break');
        }else if(timerMode == 'Short Break'){
          setTimerMode('Long Break');
        }else{
          setTimerMode('Pomodoro');
        }
        if(autoMode){
          setIsPause(false); //need fix, trung voi useeffect truoc do
          console.log(isPause);
        }
      }
    },1000);
    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timecount);
    };
  },[min,sec,hour, isPause , timerMode])
  return (
      <Title level={1}>{hour < 10? `0${hour}`: `${hour}`}:{min < 10? `0${min}`: `${min}`}:{sec < 10? `0${sec}`: `${sec}`}</Title>
  )
}