import React, { useState } from 'react'
import './Navbar.css'
import Button from './Button'
import { Link } from 'react-router-dom'
import Modal from './Modal'
function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  
  let toggle = async() => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <>

      <div id='nav'>


        <img src="https://fastly.codingal.com/images/logos/logos-main/logo-with-text.svg" alt="" />



        <ul className={`nav-items ${isOpen && 'open'}`}>
          <li className='nav-item'>Courses</li>
          <li className='nav-item'>Competition</li>
          <li className='nav-item'>Blog</li>
          <li className='nav-item'>Quizzes</li>
    
        </ul>
        <div className='join-btn-div'>
          <Link to='/class' className='btn-link'>

            <Button className="class-btn" value="Join Class" />
          </Link>
        </div>

        <div className='menu-icon' onClick={toggle}>

          <i className="fa-solid fa-bars"></i>
        </div>

      </div>

      {
        isOpen && <Modal toggle={toggle}/>
      }


    </>
  )
}

export default Navbar
