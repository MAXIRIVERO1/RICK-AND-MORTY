import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useSelector, useDispatch } from "react-redux"
import Cards from '../Cards/Cards'
import {orderASC, orderDES, filterByGender} from "../../Redux/Actions/actions.js"
import style from "./favorites.module.css"


function Favorites() {
    const favorites = useSelector((state)=>state.favorites)
    const dispatch = useDispatch()

    const handleOrderASC = () => {
        dispatch(orderASC())
    }
    const handleOrderDES = () => {
        dispatch(orderDES())
    }
    const handleGender = (e) => {
        const gender = e.target.value
        dispatch(filterByGender(gender))
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <button className={style.button} onClick={handleOrderASC}>Order by Name ASC</button>
            <button className={style.button} onClick={handleOrderDES}>Order by Name DES</button>
            <select name="Filter by Gender" id="gender" onChange={handleGender}>
                <option value="">All genders</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            {favorites.length === 0 ? <h1>There is not favorites</h1> : <Cards characters={favorites} /> }
        </div>
    )
}

export default Favorites