const { deleteCharacter } = require("../controllers/deleteCharacter.js")



const deleteCharacterHandler = async(req, res) => {
    try {
        const {_id} = req.params
        await deleteCharacter(_id)
        res.status(200).send("deleted successful")
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {deleteCharacterHandler}