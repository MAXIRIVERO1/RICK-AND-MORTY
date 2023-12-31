import React from 'react'

function Card({image, title}) {
  return (
    <div>
        <img src={image} alt={title} /><br />
        <h6>{title}</h6>
    </div>
  )
}

export default Card