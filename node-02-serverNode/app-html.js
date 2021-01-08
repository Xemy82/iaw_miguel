const http = require('http');

const hostname ="127.0.0.1";
const puerto = 3001;

const servidor = http.createServer(
    function (peticion, respuesta){
        respuesta.statusCode = 200;
        respuesta.setHeader('Content-Type','text/html');
        respuesta.end(
        `<html>
        <head>
            <title>Pagina web</title>
        <body><H1>Hola mundo<H1></body>
        </html>`
        );
    }
);

servidor.listen(puerto, hostname,
    function(){
        console.log("El servidor se esta ejecutando");
        console.log(`Puerto: ${puerto} - IP ${hostname}`)
    }
);