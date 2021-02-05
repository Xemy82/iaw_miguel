alert('Aun no hemos empezado');

fetch('http://localhost:3000')
    .then( respuesta => respuesta.json()) //convertir esto a json
    .then( objeto => rellenarParrafo(objeto.nombre) )
    .catch( error => console.error( 'Fallo:', error));

alert('Ya hemos empezado');

function rellenarParrafo(objeto){
    //let p = document.getElementById('idPar');
    let p = document.querySelector('#idPar')
    p.innerHTML = texto;
}