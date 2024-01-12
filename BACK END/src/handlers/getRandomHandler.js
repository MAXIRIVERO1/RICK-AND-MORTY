const {getRandom} = require("../controllers/getRandom.js")



const getRandomHandler = async(req, res) => {
    try {
        const result = await getRandom()
        console.log(result)
        res.status(200).json(result)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {getRandomHandler}