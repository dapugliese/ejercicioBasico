// encabezado

function mostrarDato() {
    
    const input = document.getElementById("inputDato");
    alert(input.value);
    const parrafo = document.getElementById("resultado");
    parrafo.innerText = "El dato ingresado es: " + input.value;

}


document.getElementById("botonMostrar").onclick = mostrarDato;
