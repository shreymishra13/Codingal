import React from 'react'
import './Card.css'
import Button from './Button'

function Card({data}) {


  return (
    <>
    <div className='card'>
    <img src=''/>
    <h2 className='card-userId'>User id : {
        data.userId.length>20?data.userId.substring(0,21):data.userId
        }</h2>
    <h3 className='card-id'>id : {data.id}</h3>
    <h3 className='card-title'>Title : {data.title.length>20?data.title.substring(0,15)+"...":data.title}</h3>
    <p className='card-body'>{data.body.length>100?data.body.substring(0,100)+"...":data.body}</p>
     
      
    </div>
    
    </>
  )
}

export default Card
