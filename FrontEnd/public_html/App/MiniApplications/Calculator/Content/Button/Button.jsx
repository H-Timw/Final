/* eslint-disable react/prop-types */
import './Button.css';
export default function Button({classType, onclick, value,style, label}){
  return(
    <button
    className={classType}
    onClick={onclick}
    value={value}
    style={style}
    >
      {label==0? value:label}
    </button>
  )
}