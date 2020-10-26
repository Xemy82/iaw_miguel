function imprimirsuma() {
    let op1 = document.getElementById("op1")
    let op2 = document.getElementById("op2")
    let resultado = suma(op1.value, op2.value);
    /*
    TODO rellena el párrafo con id resultado sólo si el resultado
    no es null
    */ 
    if (resultado != null){
    document.getElementById("res").innerHTML = resultado;
    }else{

    }

function suma(o1, o2) {
    let resultado=0;

    /* TODO:
    - Comprobar que los parametros son números 
    - Si los dos son números, sumarlos en resultado.
    isNAN() devuelve cierto si el valor de a, no es un número.
    - Si alguno de los dos no es número resultado = null
    */
     if (isNAN(o1) == true || isNAN(o2) == true){
         resultado = null;    
     }else{
         resultado = parseFloat(o1)+parseFloat(o2);
         //resultado = "o1" + "o2";
     }
    return resultado;
}