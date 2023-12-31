import React, { useState } from 'react';
import axios from 'axios';
import Cards from '../Cards/Cards.jsx';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/rickAndMorty/${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
      <button onClick={handleSearch}>Buscar</button>

      { results.length === 0 ? <h1>BUSCA UN PERSONAJE EN LA SEACRH BAR</h1> : <Cards characters={results}/>}
      {console.log(results)}
    </div>
  );
};

export default SearchBar;
