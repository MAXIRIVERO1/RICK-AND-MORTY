import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useSelector, useDispatch } from "react-redux"

function Favorites() {
    const favorites = useSelector((state)=>state.favorites)
    return (
        <div>
            <NavigationBar></NavigationBar>
            {favorites.length === 0 ? <h1>There is not favorites</h1> : "aqui va la logica para mostrar los favoritos" }
        </div>
    )
}

export default Favorites