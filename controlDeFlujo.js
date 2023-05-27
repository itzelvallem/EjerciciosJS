/*

Control de FLujo


Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

Condicionales

Son estructuras o condiciones que nos permiten modificar el orden natural de ejecución en nuestro programa. Son sentencias que nos ayudaran a decidir si una condición se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones.

Ejemplo

Tengo limpia mi playera de la suerte?  // pregunta o instruccion que detona la condición
true: Entonces voy a la fiesta // respuesta con su posible instrucción
false: Entonces me quedo a dormir //respuesta con su posible instrucción


/* Condicional if(si)

if (condicion){
   
}

*/

//Felipe tiene 17 anios y quiere ir a una fiesta. Dicha fiesta solo es para personas adultas (mayores de 18 anios). Ayuda a Felipe decidir si puede ir a la fiesta o no.

//Evaluamos solo una expresión (si Felipe tiene mas de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situación(incertidumbre).

let edadDeFelipe = 17; // Debemos tomar en cuenta primero la edad de felipe
let edadPermitida = 18;

if (edadDeFelipe < edadPermitida){
    console.log("Lo siento Felipe, no puedes ir a la fiesta");
}

/*

Else (de otro modo - si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.



Estructura basica del Else


if (condicion) {
    //Este bloque se ejecuta si la condicion es verdadera
} 

else 

{
    //Este bloque se ejecuta si la condicion es falsa
}


*/

let edadAxel = 17
let edadParaEntrarALaFiesta = 18;

if (edadAxel < edadParaEntrarALaFiesta){
    console.log("Lo siento Axel, no puedes entrar a la fiesta");
}

else {
    console.log ("Felicidades, tienes la edad permitida para entrar a la fiesta");
}  

/*Test de nuestro programa (valores que también se evaluan como falsos)

- "false" (string)
- NaN
- false (boolean dispara verdadero) 
*/



/*

Else If (ademas si / si no entonces)

Esta condicional nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.


Estructura basica del else if


if (condicion 1) {
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo se ejecuta si la condicon 1 es falsa, y si la condicon 2 tambien es falsa
}else{
    //bloque de codigo que se ejecuta si la condicion 1, 2 y 3 son falsas
}


Se pueden anidar x cantidad de else if entre el if que evalua la condicion inicial y el else que termina toda la expresion.

edadDeDavid = 19;
edadPermitidaDelAntro = 18;
dineroDeDavid = 20;
coverDelAntro = 150;

if (edadDeDavid > edadPermitidaDelAntro){
    console.log("Muy bien, puedes ir al antro");
} else if (dineroDeDavid > coverDelAntro){
    console.log("Si puede entrar al antro");
} else {   
    console.log("Lo siento, no tienes dinero suficiente para pagar el cover");
}

*/

let hora = prompt("Ingrese la hora actual");
if (hora < 12){
    console.log("Buenos días");
} else if (hora <=19){
    console.log("Buenas tardes ya.");
} else {   
    console.log("Buenas noches, vamos a dormir.");
}