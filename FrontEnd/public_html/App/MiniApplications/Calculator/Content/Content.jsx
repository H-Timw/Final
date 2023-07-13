/* eslint-disable react/prop-types */
import './Content.css';
import divide from '../img/divide-btn.svg';
import backspace from '../img/backspace-btn.svg';
import Button from './Button/Button';
export default function ContentCalculator({result, operation, operand, ...updateFunction}){
  let divideBtn = (<img src={divide}/>);
  let backspaceBtn = (<img src={backspace}/>);
  let arrNumber = ["0","1","2","3","4","5","6","7","8","9","."];
  let arrOperation = ["+","-","x","/","="];
  const evaluate = (operation) =>{
    switch(operation){
      case "+":
        updateFunction.updateResult(+(result) + +(operand));
        break;
      case "-":
        updateFunction.updateResult(+(result) - +(operand));
        break;
      case "x":
        updateFunction.updateResult(+(result) * +(operand));
        break;
      case "/":
        updateFunction.updateResult(+(result) / +(operand));
        break;
    }
  }
  const handleClick = (key) => {
    if(key ==="+/-"){
      if(operand !=""){
        updateFunction.updateOperand(-1*(+operand));
      }
      if(result != "" && operand ==""){
        updateFunction.updateResult(-1*(+result));
      }
    }
    if(key === "CE"){
      updateFunction.updateOperand("");
    }
    if(key === "C"){
      updateFunction.updateOperand("");
      updateFunction.updateResult("");
      updateFunction.updateOperation("");
    }
    if(key === "<-"){
      updateFunction.updateOperand(operand.slice(0, -1));
    }
    if((arrNumber.indexOf(key) !== -1)){
      updateFunction.updateOperand(operand+key);
      if(operation=="=" && result !=""){
        updateFunction.updateResult("");
      }
    }
    if((arrOperation.indexOf(key)!== -1)){
      
      if(result==""){
        updateFunction.updateResult(operand);
      }
      if(key === "="){
        if(operand!=""){
          evaluate(operation);
          updateFunction.updateOperation("");
          updateFunction.updateOperand("");
        }
      }
      
      if(operand!=""){
        evaluate(operation);
        updateFunction.updateOperand("");
      }
      updateFunction.updateOperation(key);
    }
    };
  var content = [
    {value:"CE", onclick: () => handleClick("CE")},
    {value:"C", onclick: () => handleClick("C")},
    {value:"<-", onclick: () => handleClick("<-"), label:backspaceBtn},
    {value:"/", onclick: () => handleClick("/"), style:{backgroundColor:"yellow"}, label:divideBtn},

    {value:"7", onclick: () => handleClick("7")},
    {value:"8", onclick: () => handleClick("8")},
    {value:"9", onclick: () => handleClick("9")},
    {value:"x", onclick: () => handleClick("x"), style:{backgroundColor:"yellow"}},

    {value:"4", onclick: () => handleClick("4")},
    {value:"5", onclick: () => handleClick("5")},
    {value:"6", onclick: () => handleClick("6")},

    {value:"-", onclick: () => handleClick("-"), style:{backgroundColor:"yellow"}},
    {value:"1", onclick: () => handleClick("1")},
    {value:"2", onclick: () => handleClick("2")},
    {value:"3", onclick: () => handleClick("3")},

    {value:"+", onclick: () => handleClick("+"), style:{backgroundColor:"yellow"}},
    {value:"+/-", onclick: () => handleClick("+/-")},
    {value:"0", onclick: () => handleClick("0")},
    {value:".", onclick: () => handleClick(".")},
    {value:"=", onclick: () => handleClick("=")}
  ];
  return(
  <div className="Content">
    {
      content.map((item, index) => {
        return(
          <Button
          classType={`btn ${item.subClass}`}
          key={index}
          onclick={item.onclick}
          value={item.value}
          style={item.value == operation ? item.style : {}}
          label={item.label ? item.label : 0}
          >
          </Button>
        )
      })
    }
  </div>
  )
}