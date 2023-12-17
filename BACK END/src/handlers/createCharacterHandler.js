const { createCharacter } = require("../controllers/createCharacter.js");
const mongoose = require('mongoose');
const { characters } = require("../db.js");

const createCharacterHandler = async (req, res) => {
    await mongoose.connect('mongodb://localhost:27017/rick_and_morty', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    try {
        const { name, status, species, gender, origin, image } = req.body;
        const newCharacter = await createCharacter(name, status, species, gender, origin, image);
        console.log("Este es el personaje creado", newCharacter);

        const result = await characters.create(newCharacter);

        console.log("Resultado de la inserción:", result);

        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    } finally {
        try {
            mongoose.connection.close();
        } catch (error) {
            console.error('Error closing MongoDB connection:', error.message);
        }
    }
};

module.exports = { createCharacterHandler };
