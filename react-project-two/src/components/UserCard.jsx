import React from 'react'
import RohitSharma from '../assets/RohitSharma.jpg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt='love'></img>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
