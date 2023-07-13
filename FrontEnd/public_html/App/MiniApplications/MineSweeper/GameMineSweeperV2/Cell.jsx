/* eslint-disable react/prop-types */
import { Button, Image, Space } from 'antd';
import redMine from '../assets/imgs/red-mine.png';
import mineUrl from '../assets/imgs/mine.png';
const mineIcon = <Image width={24} height={24} preview={false} src={mineUrl} style={{transform:'translateY(-2px)'}}></Image>
const bomb = (<Image preview={false} width={24} height={24} src={redMine} style={{transform:'translateY(-2px)'}}></Image>);



export default function Cell({hasMine,hasFlag,isVisible,onClick,setStatusGame,opacity,setOpacity}) {
  return(
    <Space style={{
      border: '1px solid black',
      borderRadius: '6px',
    }}>
      <Button
        style={{
          opacity: isVisible ? 1 : 0,
          padding: 0,
          height: 24,
        }}
        onClick={() => onClick}
      >
        {hasMine? bomb : mineIcon}
      </Button>
    </Space>
  )
}