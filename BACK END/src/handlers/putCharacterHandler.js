const {putCharacter} = require("../controllers/putCharacter.js")




const putCharacterHandler = async(req, res) => {
    try {
        const {name, status, species, gender, origin, image} = req.body
        const {id} = req.params
        const updated = await putCharacter(id, name, status, species, gender, origin, image)
        res.status(200).json(updated)
    } catch (error) {
        res.status(404).json({error: error.message})   
    }
}


module.exports = {putCharacterHandler}