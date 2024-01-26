import React, { useState } from 'react';
import Cards from '../Cards/Cards.jsx';
import { useDispatch, useSelector } from "react-redux";
import { onSearch } from '../../Redux/Actions/actions.js';
import axios from 'axios';
import Swal from 'sweetalert2';
import style from "./searchBar.module.css";

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const results = useSelector((state) => state.results);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = async() => {
        const action = await dispatch(onSearch(query));
        const found = action.payload;
        setQuery("");
        if(found.length === 0){
        Swal.fire({
            title: "Error",
            text: "Character not found",
            icon: "info",
            confirmButtonText: "OK"
        })};
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        handleSearch();
        }
    };

    const handleRandom = async() => {
        const {data} = await axios.get("http://localhost:3001/rickAndMorty/random")
        console.log("ESTE ES RANDOM", data)
        const {name} = data
        dispatch(onSearch(name));
    }

    return (
        <div>
        <button onClick={handleRandom}>Random</button>
        <input type="text" value={query} onChange={handleInputChange} onKeyDown={handleKeyPress} />
        <button onClick={handleSearch}>Buscar</button>

        {results.length === 0 ? <div className={style.div}><h1>BUSCA UN PERSONAJE EN LA SEARCH BAR</h1></div> : <Cards characters={results} />}
        </div>
    );
};

export default SearchBar;
