import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import {getDetail, clearDetail} from "../../Redux/Actions/actions"

function Detail() {
  const { id } = useParams();
  console.log("ESTE ES EL ID!!", id)
  const character = useSelector((state)=>state.detail)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetail(id))
    return () => {dispatch(clearDetail())}
  }, [id]);
console.log("ESTE ESTA CARGADO", character)
  if (!character) {
    return <div>Loading...</div>;
  }

  const { name, status, species, gender, origin, image } = character;

  return (
    <div>
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


