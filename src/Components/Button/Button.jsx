import React from 'react'
import './Button.css'
function Button(props) {
  

    if(props.type==='outline'){
      return (<button id='btn-outlined' onClick={props.onClick}>{props.value}</button>)
    }
    else{
      return(<button id='btn-solid' onClick={props.onClick}>{props.value}</button>)
    }
 

      
  
  
}

export default Button
  