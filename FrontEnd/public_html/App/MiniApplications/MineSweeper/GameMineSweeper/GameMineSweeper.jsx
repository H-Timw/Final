/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
  import { Image, Space, Row, Col } from 'antd';
  import { useEffect, useState } from "react";
  import Cell from './Cell/Cell';
  import mineUrl from '../assets/imgs/mine.png';
  const mineIcon = <Image width={24} height={24} preview={false} src={mineUrl} style={{transform:'translateY(-2px)'}}></Image>
  export default function GameMineSweeper({gameMode, isStart}){
    const [opacity, setOpacity] = useState(0);
    const [cols, setCols] = useState(8);
    const [rows, setRows] = useState(8);
    const [isBomb, updateBomb] = useState([]);
    const [MineMap, setMineMap] = useState([]);
    const [isShow, updateShow] = useState(null);
    const [alertWin, AcceptAlert] = useState(false);

    const [numberOfMines, setNumberOfMines] = useState(10);
    
    useEffect(()=>{
      switch(gameMode) {
        case 'easy':
          setRows(8);
          setCols(8);
          setNumberOfMines(10);
          break;
        case 'medium':
          setRows(16);
          setCols(16);
          setNumberOfMines(40);
          break;
        case 'hard':
          setRows(16);
          setCols(30);
          setNumberOfMines(99);
          break;
        case 'asia':
          setRows(16);
          setCols(30);
          setNumberOfMines(479);
          break;
      }

      let Display = new Array(rows);       // create game maps of numberOfMines
      let randomBomb = new Array(rows);       //random positions of numberOfMines
      for (let i = 0; i < rows; i++) {
        Display[i] = new Array(cols); // make each element an array
        Display[i].fill(false);
        randomBomb[i] = new Array(cols); // make each element an array
        randomBomb[i].fill(false);
      }
      //not show when starting
      updateShow(Display);
      //random bomb
      for(let i = 0; i < numberOfMines; i++) {
        let row = Math.floor(Math.random() *rows);
        let col = Math.floor(Math.random() *cols);
        while(randomBomb[row][col]) {
          row = Math.floor(Math.random() *rows);
          col = Math.floor(Math.random() *cols);
        }
        randomBomb[row][col] = true;
      }
      updateBomb(randomBomb);

      let MinesMap = new Array(rows);
      for (let i = 0; i < rows; i++) {
        MinesMap[i] = new Array(cols); // make each element an array
        MinesMap[i].fill(0);
      }
      //set bomb to map
      for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
          if(randomBomb[i][j]){
            MinesMap[i][j] = mineIcon;
          }
        }
      }
      //count bomb
      for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
          if(randomBomb[i][j]){
            if(i > 0 && !randomBomb[i-1][j]){
              MinesMap[i-1][j] += 1;
            }
            if(i < rows-1 && !randomBomb[i+1][j]){
              MinesMap[i+1][j] += 1;
            }
            if(j > 0 && !randomBomb[i][j-1]){
              MinesMap[i][j-1] += 1;
            }
            if(j < cols-1 && !randomBomb[i][j+1]){
              MinesMap[i][j+1] += 1;
            }

            if(j > 0 && i > 0 && !randomBomb[i-1][j-1]){
              MinesMap[i-1][j-1] += 1;
            }
            if(j < cols-1 && i > 0 && !randomBomb[i-1][j+1]){
              MinesMap[i-1][j+1] += 1;
            }
            
            if(j > 0 && i < rows-1 && !randomBomb[i+1][j-1]){
              MinesMap[i+1][j-1] += 1;
            }
            if(j < cols - 1 &&  i < rows-1 && !randomBomb[i+1][j+1]){
              MinesMap[i+1][j+1] += 1;
            }
          }
        }
      }
      //add number after count to a space have witdth height equal image
      for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols;j++){
          if(!randomBomb[i][j]){
            MinesMap[i][j]=<Space direction='vertical' align='center' style={{width:24, height:24,}}>{`${MinesMap[i][j]}`}</Space>;
          }
        }
      }
    setMineMap(MinesMap);
    },[gameMode,isStart])

    useEffect(()=>{
      if(isShow != null){
        let currentShow= [...isShow];
        let count = 0;
        for(let i = 0; i <rows; i++){
          for(let j = 0; j < cols; j++){
            if(!currentShow[i][j]){
              count++;
            }
          }
        }
        if(count==numberOfMines){
          AcceptAlert(true);
        }
      }
    },[isShow])
    useEffect(()=>{
      if(alertWin)
      window.alert("You won!!!");
    },[alertWin]);
    return (
      <Space direction='vertical' align='center' style={{border:'1px solid black', width:'80vw'}}>

        <Space direction='vertical'> 
          {
            MineMap.map((rows, idx) =>{
              return ( 
                <Row key={idx}>
                  {
                    rows.map((value, index)=>{
                      return (
                        <Col key={index}>
                          <Cell {...{rows,cols,isBomb,value,opacity, setOpacity,isShow,updateShow}} posOfRow={idx} posOfCol={index}/>
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