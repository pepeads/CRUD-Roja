const express = require ('express');

const router = express.Router();
const {Alumno} = require ('../models/alumno');
const {Curso} = require ('../models/Curso');

router.get('/', (req,res) => {
    res.status(200).send('hola desde rutas')
});

// CRUD
// CREATE
// READ
// UPDATE
// DELETE

// router.post('/devf/api/v1/curso', (req,res) =>{
//     const json = req.body;
//     const nuevoCurso = Curso(json);

//     nuevoCurso.save((err,  curso)=> {
//         err
//        ? res.status(409).send(err)
//        : res.status(420).send(curso)
//     });
// });

// module.exports = router;

//CREATE


router.post('/devf/api/v1/curso', (req,res) =>{
    const json = req.body;
    const nuevoCurso = Curso(json);

    nuevoCurso.save((err,  curso)=> {
        err
       ? res.status(409).send(err)
       : res.status(420).send(curso)
    });
});

//read
router.get('/devf/api/v1/curso', (req,res) =>{
    Curso 
        .find()
        .exec()
        .then(curso => {
            res.status(200).send(curso)
        })
        .catch(error => (404).error(error))
});

module.exports = router; 


//read an especific element

router.get('/devf/api/v1/curso/:id',(req,res) =>{
    const cursoId = req.params.id;

    Curso
        .findById(cursoId)
        .exec ()
        .then(curso => {
            res.status(200).send(curso)
        })
        .catch(error => (404).error(error))
});


// UPDATE

router.put('/devf/api/v1/curso/:id', (req,res) => {
    const cursoId = req.params.id; 
    const json = req.body;

    Curso
        .findOneAndUpdate (
            cursoId,
            {$set:json},
            {new: true}
        )
    .exec()
    .then(cursoActualizado => {
        res.status(200).send(cursoActualizado)
    })
    .catch(error)
})

// Delete

router.delete ('/devf/api/v1/curso/:id', (req,res) => {
    const cursoId = req.params.id;

    Curso
        .findByIdAndRemove (cursoId)
        .exec()
        .then(cursoEliminado => {
            res.status(204).send({message: 'El curso se borro exitosamente'})
        })
        .catch(error => res.status(404).error(error));
});

router.post('/devf/api/v1/alumno', (req,res) =>{
    const json = req.body;
    const nuevoAlumno = Alumno(json);

    nuevoAlumno.save((err,  curso)=> {
        err
       ? res.status(409).send(err)
       : res.status(420).send(curso)
    });
});