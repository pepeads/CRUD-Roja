const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const cursoSchema = Schema ({
    curso: ObjectId,
    nombre: String,
    description: String,
    precio: Number
});

const Curso = mongoose.model('Curso', cursoSchema);
module.exports = {Curso};