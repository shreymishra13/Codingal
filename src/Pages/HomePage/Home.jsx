import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Button from '../../Components/Button/Button'
import YoutubeVideo from '../../Components/YoutubeVideo/YoutubeVideo'
import './Home.css'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div id='home-div'>
    <Navbar/>
   

       <YoutubeVideo/> 
    {/* </div> */}
    <br />
   <Link to='/class'><Button type="outline" value="Join Class"/></Link>
 <br />
 <br />
   <Link to='/posts'><Button value="Posts"/></Link>
    
    </div>
   
      
  )
}

export default Home
