const {characters} = require("../db.js")
const mongoose = require('mongoose');




const deleteCharacter = async(id) => {
    try {
        await mongoose.connect('mongodb://localhost:27017/rick_and_morty', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const result = await characters.deleteOne({ _id: id });
        return result
    } catch (error) {
        console.log(error)
    } finally {
        mongoose.connection.close();
    }
}

module.exports = {deleteCharacter}