const mongoose = require('mongoose');
const { characters } = require("../db.js");



const createCharacter = async (name, status, species, gender, origin, image) => {

    try {
        await mongoose.connect('mongodb://localhost:27017/rick_and_morty', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const newCharacter = {name, status, species, gender, origin, image};
        const result = await characters.create(newCharacter);

        console.log("Resultado de la inserción:", result);
    
        return result
    } catch (error) {
        console.log(error)
    } finally {
        mongoose.connection.close();
    }
}

module.exports = {createCharacter}