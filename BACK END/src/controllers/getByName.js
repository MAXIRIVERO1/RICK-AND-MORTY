const axios = require("axios")

const getByName = async(name) => {
const {data} = await axios(`https://rickandmortyapi.com/api/character/?name=${name}`)
console.log(data)
return data
}


module.exports = {getByName}