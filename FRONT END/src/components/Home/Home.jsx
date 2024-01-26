import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import NavigationBar from '../NavigationBar/NavigationBar.jsx'
import style from "./home.module.css"
import { useSelector } from 'react-redux'

function Home() {
  const access = useSelector((state) => state.access)
    return (
        <div className={style.home}>
            { access ? <div>
            <NavigationBar></NavigationBar>
            <SearchBar></SearchBar> </div> : 
            <h1 className={style.div}>You must log in</h1> }
            
        </div>
    )
}

export default Home