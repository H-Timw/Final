/* eslint-disable react/prop-types */
import { Button, Typography } from 'antd';
const { Title } = Typography;

export default function ButtonStart({isPause, setIsPause}){
  return (
      <Button
      type='default'
      onClick={()=> setIsPause(!isPause)}
      style={{
        color: 'black',
        backgroundColor: 'white',
        padding: '0.5rem 2rem',
        marginBottom:'3rem',
        height: 'auto',
      }}
      >
        <Title level={4} style={{margin:0}}>{isPause?'Start':'Pause'}</Title>
      </Button>
  )
}