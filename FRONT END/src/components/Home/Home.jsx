import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import NavigationBar from '../NavigationBar/NavigationBar.jsx'
import style from "./home.module.css"

function Home() {
  return (
    <div className={style.home}>
        <NavigationBar></NavigationBar>
        <SearchBar></SearchBar>
    </div>
  )
}

export default Home