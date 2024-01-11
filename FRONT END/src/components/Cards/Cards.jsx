import React from 'react'
import Card from '../Card/Card.jsx'

function Cards({characters}) {
  return (
    <div>
        {characters.map((char, index)=>{
            const {_id, id, name, image} = char
            const characterId = _id || id
            return (
                <Card
                key={index}
                id={characterId}
                name={name}
                image={image}
                />
            )
        })}
    </div>
  )
}

export default Cards