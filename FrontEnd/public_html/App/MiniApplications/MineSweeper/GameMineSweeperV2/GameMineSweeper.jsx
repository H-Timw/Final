/* eslint-disable react-hooks/exhaustive-deps */
  /* eslint-disable react/prop-types */
  import { Button, Image, Space, Row, Col } from 'antd';
  import { SmileOutlined, MehOutlined } from '@ant-design/icons';
  import { useEffect, useState } from "react";
  import Cell from './Cell';
  export default function GameMineSweeper2({gameMode}){
    const [statusGame, setStatusGame] = useState("playing");
    const [opacity, setOpacity] = useState(0);
    const [isStart, createNewGame] = useState(true);
    const [cols, setCols] = useState(8);
    const [rows, setRows] = useState(8);
    // const [isBomb, updateBomb] = useState([]);
    const [MineMap, setMineMap] = useState([]);
    const [numberOfMines, setNumberOfMines] = useState(10);
    // const [isShow, updateShow] = useState([]);
    
    useEffect(()=>{
      if(statusGame == "lose"){
        setOpacity(1);
      }
    },[statusGame])
    useEffect(()=>{
      switch(gameMode) {
        case 'easy':
          setCols(8);
          setRows(8);
          setNumberOfMines(10);
          break;
        case 'medium':
          setCols(16);
          setRows(16);
          setNumberOfMines(40);
          break;
        case 'hard':
          setCols(30);
          setRows(16);
          setNumberOfMines(99);
          break;
        case 'asia':
          setCols(30);
          setRows(16);
          setNumberOfMines(479);
          break;
      }
      let MinesMap = [];
      for(let i = 0; i < rows; i++) {
      let mines = [];
      for(let j = 0; j < cols; j++) {
        mines.push({
          hasMine: false,
          hasFlag: false,
          isVisible: false,
        })
      }
      MinesMap.push(mines);
    }
    //random positions of numberOfMines
    for(let k = 0; k < numberOfMines; k++) {
      let i = Math.floor(Math.random() * rows);
      let j = Math.floor(Math.random() * cols);
      while(MinesMap[i][j].hasMine){
        i = Math.floor(Math.random() * rows);
        j = Math.floor(Math.random() * cols);
      }
      MinesMap[i][j].hasMine = true;
    }
    setMineMap(MinesMap);
    },[isStart, gameMode])
    // useEffect(()=>{
      
    // },[MineMap])
    return (
      <Space direction='vertical' align='center' style={{border:'1px solid black', width:'500px'}}>
        <Button type='primary' onClick={() => createNewGame(!isStart)}>{isStart? <SmileOutlined /> : <MehOutlined /> }</Button>
        <Space direction='vertical'> 
          {
            MineMap.map((rows, idx) =>{
              return ( 
                <Row key={idx}>
                  {
                    rows.map((cell, index)=>{
                      return (
                        <Col key={index}>
                          <Cell
                            hasMine={cell.hasMine}
                            hasFlag={cell.hasFlag}
                            isVisible={cell.isVisible}
                            onClick={()=>{
                              let currentState = [...MineMap];
                              if(!currentState[idx][index].isVisible)
                              {
                                currentState[idx][index].isVisible = true;
                                setMineMap(currentState);
                              }
                            }}
                            {...{setStatusGame,opacity,setOpacity}}/>
                        </Col>
                      )
                    })
                  }
                </Row>
              )
            })
          }
        </Space>
      </Space>
    )
  }