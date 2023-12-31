const {getById} = require("../controllers/getById.js")



const getByIdHandler = async(req, res) => {
    try {
        const {id} = req.params
        const result = await getById(id)
        res.status(200).json(result)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {getByIdHandler}