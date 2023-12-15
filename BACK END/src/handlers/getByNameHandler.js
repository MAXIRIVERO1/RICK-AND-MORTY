const {getByName} = require("../controllers/getByName.js")



const getByNameHandler = async(req, res) => {
    try {
        const {name} = req.params;
        const result = await getByName(name)
        console.log(result)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {getByNameHandler}