import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
import NavigationBar from "../NavigationBar/NavigationBar.jsx"
import style from "./form.module.css";
import { useSelector } from 'react-redux';

function Form() {
    const navigate = useNavigate()
    const access = useSelector((state) => state.access)
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
        { access ? 
        <div className={style.div}>
        <NavigationBar></NavigationBar>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />

        <label htmlFor="status">Status:</label><br />
        <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} required /><br />

        <label htmlFor="species">Species:</label><br />
        <input type="text" id="species" name="species" value={formData.species} onChange={handleChange} required /><br />

        <label htmlFor="gender">Gender:</label><br />
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required><br />
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select><br />

        <label htmlFor="origin">Origin:</label><br />
        <input type="text" id="origin" name="origin" value={formData.origin} onChange={handleChange} required /><br />

        <label htmlFor="image">Image URL:</label><br />
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required /><br />

        <button type="submit">Enviar</button>
        </form>
        </div> : 
        <h1 className={style.divH1}>You must log in</h1> }
        </div>
    );
}

export default Form;
