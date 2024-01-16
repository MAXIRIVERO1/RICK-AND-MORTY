import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useSelector, useDispatch } from "react-redux"
import Cards from '../Cards/Cards'
import {orderASC, orderDES} from "../../Redux/Actions/actions.js"


function Favorites() {
    const favorites = useSelector((state)=>state.favorites)
    const dispatch = useDispatch()
    const handleOrderASC = () => {
        dispatch(orderASC())
    }
    const handleOrderDES = () => {
        dispatch(orderDES())
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <button onClick={handleOrderASC}>Order by Name ASC</button>
            <button onClick={handleOrderDES}>Order by Name DES</button>
            {favorites.length === 0 ? <h1>There is not favorites</h1> : <Cards characters={favorites} /> }
        </div>
    )
}

export default Favorites