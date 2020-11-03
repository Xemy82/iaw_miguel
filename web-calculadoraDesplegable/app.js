function calcular() {
<<<<<<< HEAD
    /*lectura de operandos y operacion*/
    let op1 = document.getElementById("op1");
    let op2 = document.getElementById("op2");
    let operacion = document.getElementById("operacion");
    let resultado;
    let parrafoResultado = document.getElementById("res");
    /* comprobar si los operandos son correctos*/
    if(operandosCorrectos(op1.value, op2.value)){
        /* realizar la operacion */
        resultado = realizarOperacion(op1.value, op2.value, operacion.value);
        /* imprimir el resultado */
        parrafoResultado.innerHTML = resultado;
    }else{
        /* imprimir mensaje de error */
        parrafoResultado.innerHTML = "Error en los operandos";
    }
}

function operandosCorrectos(operando1, operando2) {
    if (isNaN(operando1) == true || isNaN(operando2) == true){
        return false;
    }else{
        return true;
    }
}

function realizarOperacion(operando1, operando2, operacion) {
    let resultado = null;
    if (operacion == "suma") {
        resultado=(parseFloat(operando1) + parseFloat(operando2)).toFixed(2);
    } else if (operacion == "resta") {
        resultado=(parseFloat(operando1) - parseFloat(operando2)).toFixed(2);
    } else if (operacion == "multi"){
        resultado=(parseFloat(operando1) * parseFloat(operando2)).toFixed(2);
    }
    return resultado;
}
=======
    let op1 = document.getElementById("op1");
    let op2 = document.getElementById("op2");
    let operacion = document.getElementById("operacion");
    console.log (operacion);
    let resultado;
    let resultado = resta(op1.value, op2.value);
    let resultado = suma(op1.value, op2.value);

    if (operacion.value == "suma"){
        resultado = suma(op1.value, op2.value);
    }else if (operacion.value == "resta"){
        resultado = resta(op1.value, op2.value);
    }else if (operacion.value == "multiplicacion"){
        resultado = multiplicacion(op1.value, op2.value);
    }


    if (resultado != null) {
        document.getElementById("res").innerHTML= resultado;    
    }else{
        document.getElementById("res").innerHTML= "Error en los operandos";    
    }
    
}


function suma(o1, o2) {
    let resultado=0;
    
     if(isNaN(o1) == true ||  isNaN(o2) == true ){
        resultado = null;
     }else{
        resultado = (parseFloat(o1) +  parseFloat(o2)).toFixed(2);
     }
    return resultado;
}

function resta(o1, o2) {
    let resultado=0;
    
     if(isNaN(o1) == true ||  isNaN(o2) == true ){
        resultado = null;
     }else{
        resultado = (parseFloat(o1) +  parseFloat(o2)).toFixed(2);
     }
    return resultado;
}

function multiplicacion(o1, o2) {
    let resultado=0;
    
     if(isNaN(o1) == true ||  isNaN(o2) == true ){
        resultado = null;
     }else{
        resultado = (parseFloat(o1) +  parseFloat(o2)).toFixed(2);
     }
    return resultado;
}
>>>>>>> 44cf7eb8aa090c51ed1f5426935f5f78478ecf52
