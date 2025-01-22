import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import YoutubeVideo from '../Components/YoutubeVideo'
import './Home.css'
function Home() {
  return (
    <div id='home-div'>
    <Navbar/>
   <YoutubeVideo/>
  

    <Button id="h" value="Join Class"/>
    <Button value="Posts"/>    
      
    </div>
  )
}

export default Home
