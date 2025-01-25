import React, { useState } from 'react'
import './Navbar.css'
import Button from './Button'
import { Link } from 'react-router-dom'
function Navbar() {
    const [isOpen,setIsOpen] = useState(false)
    const toggle=()=>{
      setIsOpen((prevIsOpen)=>!prevIsOpen)
      console.log(isOpen)
    }
  return (
    <>

    <div id='nav'>
    

        <img src="https://fastly.codingal.com/images/logos/logos-main/logo-with-text.svg" alt="" />

    

        <ul className={`nav-items ${isOpen && 'open' }`}>
          <li className='nav-item'>Courses</li>
          <li className='nav-item'>Competition</li>
          <li className='nav-item'>Blog</li>
          <li className='nav-item'>Quizzes</li>
        </ul>
        <div className='join-btn-div'>
      <Link to='/class' className='btn-link'>
        
        <Button className="class-btn" value="Join Class"/>
      </Link>
        </div>

        <div className='menu-icon' onClick={toggle}>

        <i className="fa-solid fa-bars"></i>
        </div>
    
    </div>

{
  isOpen && <div className='toggled-menu'>
<div  className='top-row'>
<img src="https://fastly.codingal.com/images/logos/logos-main/logo-with-text.svg" alt="" />
<i className="fa-solid fa-x" onClick={toggle}></i>

</div >

<div className="second-row">
<ul className="">
          <li className="">Courses</li>
          <li className="">Competition</li>
          <li className="">Blog</li>
          <li className="">Quizzes</li>
          <li className="">More</li>
          <li className="">Courses</li>
          <li className="">Login</li>
</ul>


</div>


 
</div>
}

      
    </>
  )
}

export default Navbar
