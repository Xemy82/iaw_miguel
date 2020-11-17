//valor 5
alert("Empieza el ejercicio 6");
/*
Tenemos una serie de objetos como los que siguen:

{ 
  "nombre": "Juan Luis",
  "apellido": "Guerra",
  "edad": 63,
  "casado": true
}


Son objetos persona en los que nombre y apellido deben ser un string, edad un number y casado un boolean.

Crea una función que, pasado un objeto persona nos devuelva true si todas sus propiedades cumplen las condiciones de la línea anterior y false en caso de que alguna no la cumpla.

Por cada propiedad que no cumpla con el tipo que se le espera, se deberá escribir en la consola de error mediante console.error("Mensaje de error") informando en el mensaje de error de cuál es el tipo y cuál se esperaba.

Por ejemplo: El código siguiente

let persona1 = { 
  "nombre": "Juan Luis",
  "apellido": "Guerra",
  "edad": "63",
  "casado": [true]
}

comprobarPersona(persona1);
deberá mostrar error en la edad y en la propiedad "casado".
//

*/

let p = { 
  "nombre": "Juan Luis",
  "apellido": "Guerra",
  "edad": 63,
  "casado": true
}

function comprobarPersona() {
  if ( typeof p.nombre !== 'string'){
    console.error("Nombre esta como tipo: " + typeof p.nombre + " y se esperaba un string.");
  }else if ( typeof p.apellido !== 'string'){
    console.error("Apellido esta como tipo: " + typeof p.apellido + " y se esperaba un string.");
  }else if(typeof p.edad !== 'number'){
    console.error("Edad esta como tipo: " + typeof p.edad + " y se esperaba un number.");
  }else if(typeof p.casado !== 'boolean'){
    console.error("Casado esta como tipo: " + typeof p.casado + " y se esperaba un boleano.");
  }  
}
comprobarPersona(p);
