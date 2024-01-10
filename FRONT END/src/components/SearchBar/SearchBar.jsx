import React, { useState } from 'react';
import Cards from '../Cards/Cards.jsx';
import { useDispatch, useSelector } from "react-redux";
import { onSearch } from '../../Redux/Actions/actions.js';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const results = useSelector((state) => state.results);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    dispatch(onSearch(query));
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} onKeyDown={handleKeyPress} />
      <button onClick={handleSearch}>Buscar</button>

      {results.length === 0 ? <h1>BUSCA UN PERSONAJE EN LA SEARCH BAR</h1> : <Cards characters={results} />}
    </div>
  );
};

export default SearchBar;
