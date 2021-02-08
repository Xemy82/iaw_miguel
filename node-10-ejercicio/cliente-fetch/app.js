alert('Aun no hemos empezado');

fetch('http://localhost:3000/lista')
    .then( respuesta => respuesta.json()) //convertir esto a json
    .then( objeto => rellenarLista(objeto.lista) )
    .catch( error => console.error( 'Fallo:', error));

fetch('http://localhost:3000/texto')
    .then( respuesta => respuesta.json()) //convertir esto a json
    .then( objeto => rellenarTexto(objeto.texto) )
    .catch( error => console.error( 'Fallo:', error));

alert('Ya hemos empezado');

function rellenarLista(lista){
    //let p = document.getElementById('idPar');
    let elUl = document.createElement('ul');
    document.body.appendChild(elUl)
    for(const texto of lista) {
        let elLi = document.createElement('li');
        elLi.innerHTML = texto;
        elUl.appendChild(elLi);
    }
}

function rellenarTexto(txt) {
    let elementoP = document.createElement('p');
    elementoP.innerHTML = txt;
    document.body.appendChild(elementoP);
}