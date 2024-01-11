import React from 'react'
import { Link } from 'react-router-dom';


function Card(character) {
  const {image, name, _id, id} = character
  const characterId = _id || id
  console.log(character)
  return (
    <div>
        <img src={image} alt={name} /><br />
        <Link to={`/detail/${characterId}`}><h6>{name}</h6></Link>
    </div>
  )
}

export default Card