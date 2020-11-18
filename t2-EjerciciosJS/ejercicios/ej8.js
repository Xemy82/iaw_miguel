//valor 5 puntos
alert("Empieza el ejercicio 8");
//formulario simple
//Cread mediante javascript 3 campos input de tipo texto y un botón al lado de cada campo en el body del archivo ej8.html
//Al hacer click sobre el input, su contenido se tendrá que borrar.
//Al hacer click sobre el botón, tendrá que mostrar un alert con el contenido del input que está a su lado.
//Para rellenar el los inputs, tendréis que hacer uso del tabulador.
function crearCampo(){
    var inputo = document.createElement("input");
    //inputo.type = 'text';
    inputo.setAttribute("type", "text");
    var divcampo1 = document.getElementById("campo1");
    divcampo1.appendChild(inputo);
    //var mostara = divparent        
    //return ;divparent
}
crearCampo();




/*
function mostrar1(){
    var uno = (document.getElementById("INPUT").value);
    //var resultado = numcal1 + numcal2;
    //return resultado;
    return uno;
}
*/
function mostrar2(){
    var uno = document.getElementById("campo2").value;
    //var resultado = numcal1 + numcal2;
    //return resultado;
    return uno;
}
function mostrar3(){
    var uno = document.getElementById("campo3").value;
    //var resultado = numcal1 + numcal2;
    //return resultado;
    return uno;
}