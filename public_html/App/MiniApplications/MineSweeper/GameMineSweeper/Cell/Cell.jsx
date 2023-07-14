/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Button, Image, Space } from 'antd';
import { useState, useEffect } from 'react';
import redMine from '../../assets/imgs/red-mine.png';
export default function Cell({rows,cols,isBomb,value,opacity,setOpacity,isShow,updateShow,posOfRow,posOfCol}){
  let bomb = (<Image preview={false} width={24} height={24} src={redMine} style={{transform:'translateY(-2px)'}}></Image>);
  const [Img,changeImg] = useState(value);
  const [display, setDisplay] = useState(false);
  useEffect(()=>{
    let currentShow = [...isShow];
    let currentBomb = [...isBomb];
    if(currentShow[posOfRow][posOfCol]){
      if(!display) setDisplay(true);
      if(posOfRow > 0){
        if(!currentBomb[posOfRow-1][posOfCol] && !currentShow[posOfRow-1][posOfCol]){
          currentShow[posOfRow-1][posOfCol] = true;
        }
      }
      if(posOfCol > 0){
        if(!currentBomb[posOfRow][posOfCol-1] && !currentShow[posOfRow][posOfCol-1]){
          currentShow[posOfRow][posOfCol-1] = true;
        }
      }
      if(posOfRow < rows - 1){
        if(!currentBomb[posOfRow+1][posOfCol] && !currentShow[posOfRow+1][posOfCol]){
          currentShow[posOfRow+1][posOfCol] = true;
        }
      }
      if(posOfCol < cols - 1){
        if(!currentBomb[posOfRow][posOfCol+1] && !currentShow[posOfRow][posOfCol+1]){
          currentShow[posOfRow][posOfCol+1] = true;
        }
      }
      updateShow(currentShow);
    }
  })
  return (
    <Space style={{
      border: '1px solid black',
      borderRadius: '6px',
    }}>
      <Button
        style={{
          opacity: display ? 1 : opacity,
          padding: 0,
          height: 24,
        }}
        onClick={() => 
          {
            if(isBomb[posOfRow][posOfCol])
            {
              changeImg(bomb);
              setOpacity(1);
              setTimeout(() =>{
                window.alert("You lose the game!!");
              },100);
            }
            let currentShow = [...isShow];
            if (!currentShow[posOfRow][posOfCol]){
              currentShow[posOfRow][posOfCol] = true;
              updateShow(currentShow);
            }
          }}
      >
        {Img}
      </Button>
    </Space>
  )
}