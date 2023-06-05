// 1- Traer a referenciar todos los elementos del HTML y los vamos a guardar en variables para poder utilizarlas despues

//Metodos de seleccion
let elementoContador = document.getElementById("numeroContador");
let botonIncremento = document.getElementById("botonIncrementar");
let botonDecremento = document.getElementById("botonDecrementar");
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document.querySelector("#memeRandom");


//Declarar una variable con un estado inicial
var valorContador = 0;

//logica de negocio (funciones)
function incrementar(){
    valorContador++;
    numeroContador.innerHTML = valorContador;

    if(valorContador === 10){
        mostrarImagen();
    } else{
        memeRandom.style.display = "none";
}
}


function decrementar(){
    valorContador--;
    numeroContador.innerHTLM = valorContador;
}


function resetear(){
valorContador = 0;
numeroContador.innerHTML = valorContador;
memeRandom.style.display = "none";
}

//function mostrarImagen()

//La intencion de esta funcion es que cuando sea invocada, recorra el arreglo y tome uno de los elementos de forma aleatoria (index)




//La intencion de esta funcion es que cuando sea invocado, recorra el arreglo y tome uno de los elementos de forma aleatoria (index)
function mostrarImagen(){
    var coleccionImagenes = ["./meme1.png", "./meme2.png", "./meme3.png", "./meme4.png"];

//Generar un indice aleatorio
    let indexRandom = Math.floor(Math.random()*coleccionImagenes.length);

//Obtener la URL o dirección de la imagen
let urlAleatorio = coleccionImagenes[indexRandom];


memeRandom.src = urlAleatorio;

memeRandom.style.display="block";


}

//Eventos en los botones

botonIncrementar.addEventListener("click", incrementar);
botonDecrementar.addEventListener("click", decrementar);
botonResetear.addEventListener("click", resetear);