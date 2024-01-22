import React from 'react'
import Card from '../Card/Card.jsx'
import style from "./cards.module.css"

function Cards({characters}) {
  return (
    <div className={style.cards}>
        {characters.map((char, index)=>{
            const {_id, id, name, image, gender} = char
            const characterId = _id || id
            return (
                <Card
                className={style.card}
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