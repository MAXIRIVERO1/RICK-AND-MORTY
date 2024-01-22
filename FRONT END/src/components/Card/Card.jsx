import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite, makeFavorite } from "../../Redux/Actions/actions.js";
import style from "./card.module.css"

function Card(character) {
    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    console.log("estos son favorites", favorites);

    useEffect(() => {
        const isCharacterInFavorites = favorites.some((fav) => fav._id === character.id || fav.id === character.id);
        console.log("este es el resultado de some", isCharacterInFavorites);
        setIsFav(isCharacterInFavorites);
    },  [favorites, character.id]);

    const handleFavorite = (id) => {
        if (isFav) {
        setIsFav(false);
        dispatch(deleteFavorite(id));
        } else {
        setIsFav(true);
        dispatch(makeFavorite(id));
        }
    };

    const { image, name, id, _id, gender } = character;
    console.log("este es el character de la card:", character)
    const characterId = _id || id;

    return (
        <div className={style.card}>
        <img src={image} alt={name} /><br />
        {
            isFav ? (
            <button onClick={() => { handleFavorite(characterId) }} className={style.button}>❤️</button>
            ) :
            (
            <button onClick={() => { handleFavorite(characterId) }} className={style.button}>🤍</button>
            )
        }
        <Link className={style.link} to={`/detail/${id}`}><h3>{name}</h3></Link>
        <p>Gender: {gender}</p>
        </div>
    );
}

export default Card;



