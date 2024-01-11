const { characters } = require("../db.js");
const mongoose = require('mongoose');
const axios = require("axios");



const getById = async (id) => {
  try {
    mongoose.connect('mongodb://localhost:27017/rick_and_morty', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    try {
      const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`);
      console.log("ESTE ES EL RESULTADO DE AXIOS", data);

      if (data) {
        return data; 
      }
    } catch (axiosError) {
      console.error("Error en la búsqueda de Axios:", axiosError);
    }

    const found = await characters.findById(id);
    console.log("Este es found:", found);

    if (found) {
      return found;
    }

    return null;

  } catch (error) {
    console.error("Error en la función getById:", error);
  }
};

module.exports = { getById };
