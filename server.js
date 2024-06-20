const express = require('express');
const dotenv =  require('dotenv');

// Leer el archivo de configuración
dotenv.config({path:'./config/config.env'});

// Crear una app a partir de la clase express
const app = express();

// Establecer el puerto en localhost
const PORT = process.env.PORT || 5000;

// Lanzar aplicacción
app.listen(PORT, console.log(`Server corrientdo en ${process.env.NODE_ENV} EN EL PUERTO ${PORT}`));