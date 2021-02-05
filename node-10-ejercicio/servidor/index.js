const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', function (req,res) {
    let respuesta = {
        //"nombre": "Alumno"
        "ul": ["hola", "adios"]
    }
    // Permitir conexiones desde otros origenes.
    res.header("Access-Control-Allow-Origin", "*");
    res.json(respuesta);
})

app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log('servidor iniciado');
}