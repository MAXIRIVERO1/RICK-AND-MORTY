import React, { useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import {getDetail, clearDetail} from "../../Redux/Actions/actions"
import axios from 'axios';
import Swal from 'sweetalert2';
import NavigationBar from '../NavigationBar/NavigationBar';

function Detail() {
    const { id } = useParams();
    console.log("ESTE ES EL ID!!", id)
    const character = useSelector((state)=>state.detail)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getDetail(id))
        return () => {dispatch(clearDetail())}
    }, [id]);
    console.log("ESTE ESTA CARGADO", character)
    if (!character) {
        return <div>Loading...</div>;
    }

    const handleDelete = async(id) => {
    const {data} = await axios.delete(`http://localhost:3001/rickAndMorty/${id}`)
    Swal.fire({
      title: '¡Deleted!',
      text: `${data}`,
      icon: 'info',
      confirmButtonText: 'OK',
    });
    navigate("/")
    }

    const handleEdit = async(id) => {
        navigate(`/edit/${id}`)
    }

    const { name, status, species, gender, origin, image } = character;

    return (
        <div>
        <NavigationBar></NavigationBar>
        {id && id.toString().length > 3 ? <button onClick={()=>handleEdit(id)}>Edit</button> : null}
        {id && id.toString().length > 3 ? <button onClick={()=>handleDelete(id)}>Delete</button> : null}
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>Gender: {gender}</p>
        <p>Origin: {origin?.name || origin}</p>
        <p>Species: {species}</p>
        <p>Status: {status}</p>

        </div>
    );
}

export default Detail;


