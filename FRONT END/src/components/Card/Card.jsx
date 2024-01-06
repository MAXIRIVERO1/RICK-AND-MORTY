import React from 'react'
import { Link } from 'react-router-dom';


function Card(character) {
  const {image, title, id} = character
  return (
    <div>
        <img src={image} alt={title} /><br />
        <Link to={`/detail/${id}`}><h6>{title}</h6></Link>
    </div>
  )
}

export default Card