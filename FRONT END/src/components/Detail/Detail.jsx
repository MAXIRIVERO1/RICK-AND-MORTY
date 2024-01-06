import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const {data} = await axios.get(`http://localhost:3001/rickAndMorty/by/${id}`);

        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  const { name, status, species, gender, origin, image } = character;

  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Gender: {gender}</p>
      <p>Origin: {origin?.name}</p>
      <p>Species: {species}</p>
      <p>Status: {status}</p>

    </div>
  );
}

export default Detail;

