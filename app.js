//crear un servidor web
const express = require('express');

//instala app express, define el puerto
const app = express();
const port = process.env.PORT || 3000;

//leer fichero.env
require('dotenv').config()
console.log(process.env.API_KEY) //??

//convertir las peticiones http en json
app.use(express.json());

//Rutas
const filmsRoute = require("./routes/films");

//API
app.use("/api/film", filmsRoute);

//arranca el servidor express
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Necesario exportar app para que se puedan ejecutar los tests correctamente
module.exports = app;