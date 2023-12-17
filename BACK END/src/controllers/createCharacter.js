



const createCharacter = (name, status, species, gender, origin, image) => {

    const nuevoDocumento = {name, status, species, gender, origin, image};

    return nuevoDocumento

}

module.exports = {createCharacter}