import React from 'react'
import Card from '../Card/Card.jsx'

function Cards({characters}) {
  return (
    <div>
        {characters.map((char, index)=>{
            const {_id, id, name, image, gender} = char
            const characterId = _id || id
            return (
                <Card
                key={index}
                id={characterId}
                name={name}
                image={image}
                gender={gender}
                />
            )
        })}
    </div>
  )
}

export default Cards