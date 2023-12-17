const {characters} = require("../db.js")
const mongoose = require('mongoose');




const putCharacter = async(id, name, status, species, gender, origin, image) => {
    try {
        await mongoose.connect('mongodb://localhost:27017/rick_and_morty', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const found = await characters.findById(id);

        console.log("este es found", found)

        const update = {name, status, species, gender, origin, image}

        console.log("este es update", update)

        const result = await characters.updateOne(found, update)

        return result
    } catch (error) {
        console.log(error)
    } finally {
        mongoose.connection.close();
    }
}

module.exports = {putCharacter}