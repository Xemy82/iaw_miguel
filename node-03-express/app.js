const express = require('express');
const puerto = 3000;
const web = express()

web.get('/',
    function(req, res){
        res.send('Hola mundo');
    }
);
web.get('/adios',
    function(req, res){
        res.send('Adios mundo');
    }
);

web.listen(puerto,
    function(){
        console.log(`Servidor a la escucha en http://localhost:${puerto}`);
    }    
);