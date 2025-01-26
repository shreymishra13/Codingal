import React from 'react'
import './Modal.css'
import { Link } from 'react-router-dom'

function Modal(props) {
 
  return (
    <div className={`toggled-menu`}>
    <div className='top-row'>
    
      <img src="https://fastly.codingal.com/images/logos/logos-main/logo-with-text.svg" alt="" />
      <i className="fa-solid fa-x" onClick={props.toggle}></i>

    </div>

    <div className="second-row">
      <ul className="">
        <li className="">Courses</li>
        <li className="">Competition</li>
        <li className="">Blog</li>
        <li className="">Quizzes</li>
        <li className="">More</li>
        <li className="">Courses</li>
      
        
  
      </ul>


    </div>



  </div>
  )
}

export default Modal
