const express = require('express');
const dotenv =  require('dotenv');

// Leer el archivo de configuración
dotenv.config({path:'./config/config.env'});

// Crear una app a partir de la clase express
const app = express();

// Especificar el archivas de rutas campus.js
const campus = require('./routes/campus');
const alumnos = require('./routes/alumnos');

// Montar(activar) rutas
app.use('/api/v1/campus', campus);
app.use('/api/v1/alumnos', alumnos);

// Establecer el puerto en localhost
const PORT = process.env.PORT || 5000;

// Lanzar aplicacción
app.listen(PORT, console.log(`Server corriendo en ${process.env.NODE_ENV} EN EL PUERTO ${PORT}`));