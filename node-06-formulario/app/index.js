const express = require('express');
const path = require('path');
const app = express();
app.set('puerto',3000);

//con body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}))



// todo usar body Parser y sanitizar datos.
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,"form.html"));
});

app.post('/form', function (req,res) {
  //todo capturar datos
  console.log("petición recibida:"+req.method);
/*
//sin body-parser
  let body = '';
  req.on('data', function (dato){
    body+= dato.toString();
  });
  req.on('end',function(){
    console.log(body);
    res.sendFile(path.join(__diname,"form.html"));
  })
*/
//con body-parser
let recibido = req.body;
console.log(recibido);
res.sendStatus(200);

})


app.listen(app.get('puerto'), iniciarServidor());

function iniciarServidor() {
  console.log(
    `Servidor en http://localhost:${app.get('puerto')}`);
}
