const {characters} = require("../db.js")
const mongoose = require('mongoose');
const axios = require("axios");




const getById = async(id) => {
    try {
        await mongoose.connect('mongodb://localhost:27017/rick_and_morty', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        var result = [];

        const found = await characters.findById(id);
        console.log("este es found!", found)

        if (found) {
            return found;
        }

        const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`);
        
        if (data){
            return data
        }

        
        console.log("este es el rsultado de la busqueda por id",data)
        
        return result;
    } catch (error) {
        console.log(error)
    } finally {
        mongoose.connection.close();
    }
}

module.exports = {getById}