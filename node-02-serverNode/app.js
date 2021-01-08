const http = require('http');

const hostname ="127.0.0.1";
const port = 3000;

const servidor = http.createServer(
    function (peticion, respuesta){
        respuesta.statusCode = 200;
        respuesta.setHeader('Content-Type','text/plain');
        respuesta.end("Hola mundo");
    }
);

servidor.listen(puerto, hostname,
    function(){
        console.log("El servidor se esta ejecutando");
        console.log(`Puerto: ${puerto} - IP ${hostname}`)
    }
);
