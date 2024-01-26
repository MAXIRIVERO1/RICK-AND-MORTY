import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams, useNavigate} from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import style from "./formPut.module.css";

function FormPut() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [character, setCharacter] = useState({})
    const [formData, setFormData] = useState({
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        origin: character.origin,
        image: character.image
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3001/rickAndMorty/by/${id}`);
                setCharacter(data);
                }catch (error) {
                console.error('Error fetching character:', error);
                }
            };
    
        fetchData();
    }, [id]);

    
    console.log("este es CHARACTER", character)
      if (!character) {
        return <div>Loading...</div>;
      }


    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.put(`http://localhost:3001/rickAndMorty/${id}`, formData);
        console.log('Respuesta de la petición PUT:', response.data);
        Swal.fire({
            title: '¡Perfect!',
            text: 'Character edited succesfull',
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
        <div className={style.div}>
        <NavigationBar></NavigationBar>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder={character.name} /><br />

            <label htmlFor="status">Status:</label><br />
            <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} placeholder={character.status} /><br />

            <label htmlFor="species">Species:</label><br />
            <input type="text" id="species" name="species" value={formData.species} onChange={handleChange} placeholder={character.species} /><br />

            <label htmlFor="gender">Gender:</label><br />
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} placeholder={character.gender} ><br />
                <option value="unknown">Gender</option>
                <option value="unknown">Unknown</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Genderless">Genderless</option>
            </select><br />

            <label htmlFor="origin">Origin:</label><br />
            <input type="text" id="origin" name="origin" value={formData.origin} onChange={handleChange} placeholder={character.origin} /><br />

            <label htmlFor="image">Image URL:</label><br />
            <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} placeholder={character.image} /><br />

            <button type="submit">Enviar</button>
        </form>
        </div>
  );
}

export default FormPut;
