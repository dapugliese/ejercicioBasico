// encabezado

function mostrarDato() {
    var contador = 1;
    
    var input = document.getElementById("inputDato");
    var parrafo = document.getElementById("resultado");
    var total = document.getElementById("total");

     while( contador <= 12 ){
        resultado = input.value  * contador;
        parrafo.innerText +=  input.value + ' x ' + contador +' = ' + resultado + "\n" ;
        contador++;

     }
    
    suma +=  parseInt(input.value);

}

var suma = 0;







// document.getElementById("botonMostrar").onclick = mostrarDato;
