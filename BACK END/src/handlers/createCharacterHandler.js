const { createCharacter } = require("../controllers/createCharacter.js");


const createCharacterHandler = async (req, res) => {
    try {
        const { name, status, species, gender, origin, image } = req.body;

        const newCharacter = await createCharacter(name, status, species, gender, origin, image);

        console.log("Este es el personaje creado:", newCharacter);

        res.status(200).json(newCharacter);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = { createCharacterHandler };
