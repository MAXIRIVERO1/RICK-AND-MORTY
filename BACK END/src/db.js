const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/rick_and_morty', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const newSchema = new Schema({
  campo1: String,
  campo2: Number
});

const characters = mongoose.model('characters', newSchema);

// Crear un nuevo documento
const nuevoDocumento = new characters({ campo1: 'alien', campo2: 42 });

// Guardar el documento en la base de datos
nuevoDocumento.save()
  .then(() => {
    console.log('Documento guardado');

    // Consultar el documento recién creado
    return characters.find({ campo1: 'alien' });
  })
  .then((documentos) => {
    console.log('Documentos encontrados:', documentos);

    // Cerrar la conexión a la base de datos después de realizar la consulta
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error(error);

    // Cerrar la conexión a la base de datos en caso de error
    mongoose.connection.close();
  });

  module.exports = {characters}
