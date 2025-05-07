// encabezado

function mostrarDato() {
    var input = document.getElementById("inputDato");
    var parrafo = document.getElementById("resultado");
    var total = document.getElementById("total");
    parrafo.innerText +=  "El dato ingresado es: " + input.value + "\n" ;
    suma +=  parseInt(input.value);
    total.innerText = suma;
    
}

var suma = 0;







// document.getElementById("botonMostrar").onclick = mostrarDato;
