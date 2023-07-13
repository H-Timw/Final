/* eslint-disable react/prop-types */
import { Button } from 'antd';

export default function SelectTimerMode({value,timerMode,setTimerMode}){
  return(
    <Button 
    type='text'
    onClick={()=>setTimerMode(value)}
    style={
      {
        backgroundColor: timerMode == value? 'rgba(255,255,255,0.1)' : 'transparent',
        fontWeight: timerMode == value ? 'bold' : 'normal',
        color: 'rgba(0,0,0,1)',
      }
    }>
      {value}
    </Button>
  )
}