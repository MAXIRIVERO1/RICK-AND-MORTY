import React from 'react'
import Card from '../Card/Card.jsx'

function Cards({characters}) {
  return (
    <div>
        {characters.map((char, index)=>{
            const {id, name, image} = char
            return (
                <Card
                key={index}
                id={id}
                title={name}
                image={image}
                />
            )
        })}
    </div>
  )
}

export default Cards