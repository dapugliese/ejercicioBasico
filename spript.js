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


var lista = [];

function ingresar(){
    var numero = document.getElementById('input-Dato');
    
    lista.push(parseInt(numero.value));
    var p = document.getElementById('resultado');
    p.innerText=lista;
}

function Finalizar(){

    var v1 = document.getElementById("menor");
    var v2 = document.getElementById("mayor");
    var v3 = document.getElementById("promedio");
    var v4 = document.getElementById("suma_total");

    var min = lista[0];
    var max = 0;
    var promedio = 0;
    var suma = 0;

    for (var i=0; i<lista.length; i++){
    suma = suma+lista[i];

    if (lista[i]>max) {
        max = lista[i];

    }

    if (lista[i]<min) { 
        min = lista[i];

    }
     
    promedio = suma / lista.length;

    }

    v2.innerText += " " + max;
    v4.innerText += " " + suma;
    v1.innerText += " " + min
    v3.innerText += " " + promedio

}


// document.getElementById("botonMostrar").onclick = mostrarDato;
