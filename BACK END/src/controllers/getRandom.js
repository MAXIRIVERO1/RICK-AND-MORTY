const mongoose = require('mongoose');
const axios = require("axios");



const getRandom = async () => {
    mongoose.connect('mongodb://localhost:27017/rick_and_morty', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const id = Math.floor(Math.random() * 826)
        const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`);
        console.log("ESTE ES EL RESULTADO DE AXIOS", data);

        return data; 
};

module.exports = { getRandom };
