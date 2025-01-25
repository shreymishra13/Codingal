import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <div>   

        <button id='btn' onClick={props.onClick}>{props.value}</button>
      
    </div>
  )
}

export default Button
  