import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import NavigationBar from '../NavigationBar/NavigationBar.jsx'

function Home() {
  return (
    <div>
        <NavigationBar></NavigationBar>
        <SearchBar></SearchBar>
    </div>
  )
}

export default Home