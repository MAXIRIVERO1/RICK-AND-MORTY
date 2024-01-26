import React, { useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import {getDetail, clearDetail, deleteFavorite, deleteResults} from "../../Redux/Actions/actions"
import axios from 'axios';
import Swal from 'sweetalert2';
import NavigationBar from '../NavigationBar/NavigationBar';
import style from "./detail.module.css";

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
    dispatch(deleteFavorite(id))
    dispatch(deleteResults(id))
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
            <div className={style.card}>
                <img className={style.img} src={image} alt={name} />
                <h1 className={style.h1} >{name}</h1>
                <p className={style.p} >Gender: {gender}</p>
                <p className={style.p} >Origin: {origin?.name || origin}</p>
                <p className={style.p} >Species: {species}</p>
                <p className={style.p} >Status: {status}</p>
                {id && id.toString().length > 3 ? <button onClick={()=>handleEdit(id)} className={style.button}>Edit</button> : null}
                {id && id.toString().length > 3 ? <button onClick={()=>handleDelete(id)} className={style.button}>Delete</button> : null}
            </div>
        </div>
    );
}

export default Detail;


