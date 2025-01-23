import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import YoutubeVideo from '../Components/YoutubeVideo'
import './Home.css'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div id='home-div'>
    <Navbar/>
   <YoutubeVideo/>
  
   <Link to='/class'><Button id="h" value="Join Class"/></Link>
   <Link to='/posts'><Button value="Posts"/></Link>
    
      
    </div>
  )
}

export default Home
