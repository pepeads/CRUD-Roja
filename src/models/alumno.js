const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

const alumnoSchema = Schema ({
    nombre: String,
    apellidos: String,
    edad: String,
    genero: String,
    curso : {
        type: objectId,
        ref: 'Curso'
    }

});

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = { Alumno}