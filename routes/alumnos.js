const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    res.status(200).send('<h2>Listado de todos los alumnos</h2>');
});

router.get('/profile/:username', (req, res) => {
    res.status(200).send(`<h2>Perfil del alumno ${req.params.username}</h2>`);
});

// router.post('/', (req, res) => {
//     res.status(201).json({success: true, msg: "Alumno creado"});
// });

// router.put('/:id', (req, res) => {
//     res.status(200).json({success: true, msg: `Alumno modificado ${req.params.id}`});
// });

// router.delete('/:id', (req, res) => {
//     res.status(200).json({success: true, msg: `Elemento eliminado ${req.params.id}`});
// });

module.exports = router;