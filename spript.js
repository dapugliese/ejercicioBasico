// encabezado

function mostrarDato() {
    
    const input = document.getElementById("inputDato");

    const parrafo = document.getElementById("resultado");
    parrafo.innerText = "El dato ingresado es: \n" + input.value;

}


document.getElementById("botonMostrar").onclick = mostrarDato;
