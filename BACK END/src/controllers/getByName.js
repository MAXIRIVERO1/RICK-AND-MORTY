const axios = require("axios");
const mongoose = require('mongoose');
const {characters} = require('../db.js');

const getByName = async (name) => {
  try {
    await mongoose.connect('mongodb://localhost:27017/rick_and_morty', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const dbResult = await characters.find({ campo1: name });

    
    var combinedResults = [];
    
    if (dbResult.length > 0) {
        combinedResults = [...combinedResults, ...dbResult];
    }
    
    console.log("este es el resultado del array", combinedResults)
    const { data } = await axios(`https://rickandmortyapi.com/api/character/?name=${name}`);
    
    if (data.results && data.results.length > 0){
        
        combinedResults = [...combinedResults, ...data.results];
    }
    
    return combinedResults;

  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
        console.log('Personaje no encontrado en la API');
    return combinedResults;
    }
    throw error;
  } finally {
    mongoose.disconnect();
  }
};

module.exports = { getByName };

