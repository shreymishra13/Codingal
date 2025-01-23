import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/image.png'
import Button from '../Components/Button'
function ClassNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen((prevIsOpen)=>{
            return !prevIsOpen
        })
    }
return (
    <div>
        <div id='nav'>
            <div className="nav-img">
                {isOpen ? (
                    <img src="https://fastly.codingal.com/images/logos/logos-main/logo-with-text.svg" alt="" />
                ) : (
                    <img src={image} alt="h" />
                   
                )}
            </div>
        </div>
    </div>
)
}

export default ClassNavbar
