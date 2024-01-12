import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

function Form() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    species: '',
    gender: 'unknown',
    origin: '',
    image: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/rickAndMorty/create', formData);
      console.log('Respuesta de la petición POST:', response.data);
      const id = response.data._id;
      Swal.fire({
        title: '¡Perfect!',
        text: 'Character created',
        icon: 'info',
        confirmButtonText: 'OK',
      });
      setFormData({
        name: '',
        status: '',
        species: '',
        gender: 'unknown',
        origin: '',
        image: ''
      })
      navigate(`/detail/${id}`)
    } catch (error) {
      console.error('Error al realizar la petición POST:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="status">Status:</label>
        <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} required />

        <label htmlFor="species">Species:</label>
        <input type="text" id="species" name="species" value={formData.species} onChange={handleChange} required />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <label htmlFor="origin">Origin:</label>
        <input type="text" id="origin" name="origin" value={formData.origin} onChange={handleChange} required />

        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
