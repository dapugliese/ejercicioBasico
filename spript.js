function ejecutaMetodoRomper(){
  
    parrafo.innerText = sillaSana.romper();
    
}


class Silla {

    peso;
    patas;
    color;
    tamaño;

    mover(){
       // alert("Se ejecutó el método mover")
    }
    romper(){

        return "la silla " + this.color +" está rota....";

    }
    arreglar(){

    }
}


var sillaRota = new Silla();
var sillaSana = new Silla();

sillaRota.color = "azul";
sillaSana.color = "verde";

var parrafo = document.getElementById("resultado");
