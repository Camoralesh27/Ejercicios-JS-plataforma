//*Ejercicio 1. Sum.
/* Crea una función llamada sum que reciba dos parametros "a" y "b" y regrese la suma de ambos números. Recuerda que para devolver el valor de una función se utiliza la palabra reservada return */

/* 
let a = 5;
let b = 7;

function sum(a,b){
    return a+b;
}

let suma = sum(a,b);
console.log(suma)
*/

//*----------------------------------------------------------------------



//*Ejercicio 2.Subs.
/* Crea una función llamada subs que reste dos parametros "a" y "b" y regrese su resultado. Recuerda que para devolver el valor de una función se utiliza la palabra reservada return */

/* 
function subs(a,b){
    return a-b;
}

let num1 = 10;
let num2 = 7;

let rest = subs(num1,num2);
console.log(rest);
 */

//*----------------------------------------------------------------------



//*Ejercicio 3. Variables.
/* Crea una variable llamada cont que sea del tipo entero, después crea otra variable llamada bool que sea del tipo booleano y por último una variable llamada str que sea del tipo string. Recuerda utilizar la palabra reservada var para este ejercicio. */

/* 
var cont = 0;
var bool = true;
var str = "hello word"
 */

//*-----------------------------------------------------------------------



//*Ejercicio 4. Mayor.
/* Crea una función que se llame mayorDeEdad, reciba una edad como parametro y regrese si el usuario es "Mayor de edad" o es "Menor de edad" */

/*  
function mayorDeEdad(edad){
    if(edad>=18 && edad <=120){
        return "Mayor de edad";
    }
    else if( edad<18 && edad>=0){
        return "Menor de edad";
    }
    else{
        return "ERROR";
    }
}

let edad1 = 15;
let edad2 = 18;
let edad3 = 0;
let edad4 = -5;
let edad5 = 120;
let edad6 = 130;

console.log(`La edad ${edad1} es ${mayorDeEdad(edad1)}`);
console.log("La edad " + edad2 + " es " + mayorDeEdad(edad2));
console.log(`La edad ${edad3} es ${mayorDeEdad(edad3)}`);
console.log("La edad " + edad4 + " es " + mayorDeEdad(edad4));
console.log(`La edad ${edad5} es ${mayorDeEdad(edad5)}`);
console.log("La edad " + edad6 + " es " + mayorDeEdad(edad6));
*/

//*------------------------------------------------------------------------



//*Ejercicio 5. Evaluate.
/* Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
"Positivo" si el número es positivo.
"Negativo" si el número es negativo.
"Cero" si el número es cero. */

/* 
function evaluate(num){
    if(num > 0){
        return "Positivo";
    }
    else if(num < 0){
        return "Negativo";
    }
    else{
        return "Cero";
    }
}

let num1 = -10;
let num2 = 10;
let num3 = 0;

console.log(evaluate(num1));
console.log(evaluate(num2));
console.log(evaluate(num3));
*/

//*--------------------------------------------------------------------------



//*Ejercicio 6. forLoop.
/* Crear un ciclo for o while que almacene en un array llamado pares los numeros pares que hay entre el 0 y el 100, empezando desde 0 */

/* 
let paresFor = [];
let paresWhile = [];

for(let i = 0; i<=100; i++){
    if(i%2 == 0){
        paresFor.push(i);
    }
}

cont = 0;
while(cont<=100){
    if(cont%2 == 0){
        paresWhile.push(cont);
    }
    cont++;
}

console.log(paresFor);
console.log(paresWhile);
 */

//! El cero es un número PAR. Además modulo de 0/2 = 0.
//https://www.bbc.com/mundo/noticias/2012/12/121202_curiosidades_cero_numero_par_impar_jrg#:~:text=Entonces%2C%20%C2%BFqu%C3%A9%20es%20el%20cero,impar%20o%20ninguno%20de%20ellos%3F&text=Para%20los%20matem%C3%A1ticos%2C%20la%20respuesta,cero%20es%20un%20n%C3%BAmero%20par.
//*----------------------------------------------------------------------



//*Ejercicio 7. Letter.
/*Crea una función llamada letter ingresar cualquier letra del alfabeto y verifique si es vocal o consonante.
"Vocal" si la letra es una vocal.
"Consonante" si la letra es una consonante.*/

/* 
let letra1 = "a";
let letra2 = "b";

function letter(letra){
    if( letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
        return "vocal";
    }
    else{
        return "consonante";
    }
}

let x = letter(letra1);
console.log(m);

let y = letter(letra2);
console.log(y)
 */
//*--------------------------------------------------------------------



//*Ejercicio 8. Multiple.
/* Crea una función llamada multiple que reciba como parámetro un número para evaluar si un número es divisible entre 5 y 11 o no lo es. En caso de ser divisible entre 5 y 11, retornar true En caso de no ser divisible entre 5 y 11, retornar false */

/* 
let num = 5;
function multiple(num){
    
    if (num % 5 === 0 || num % 11 === 0){
        return true;
    }
    else{
        return false;
    }
}

a= multiple(num);
console.log(a)
*/
//*----------------------------------------------------------------------



//*Ejercicio 9. Largest.
/*Crea una función llamada largest que reciba como parámetro un arreglo de números, esta función debe retornar el número más grande del arreglo.*/

/* 
let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.length)

function largest(arr){
    let m = 0;

    for(let i = 0; i <= arr.length-1; i++ ){ //longitud de 5, que van del 0 al 4.
        if( m < arr[i]){
            m = arr[i];
        }
    }
    return m;
}

let mayor=largest(arr);
console.log(mayor);
 */

//!Aquí viene el uso de array.length para conocer la longitud del array
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//*------------------------------------------------------------------------------------



//*Ejercicio 10. Game.
/* Crea una función llamada game que simule el juego "Piedra, papel y tijeras", la función recibirá como parámetros como se muestra a continuación:
game("Piedra", "Papel") Jugador 1 ha seleccionado "Piedra" y jugador 2 ha seleccionado "Papel", por lo tanto el ganador es el jugador 2.
La función unicamente recibirá como parámetro "Piedra", "Papel" o "Tijeras", retornar lo siguiente:
"J1" Si ha ganado el jugador 1.
"J2" Si ha ganado el jugador 2.
"Empate" Si hay un empate. */

/* 
function game(p1,p2){
    if(p1 == "piedra"){
        if(p2 == "piedra"){
            return "empate";
        }
        else if(p2 == "papel"){
            return "J2";
        }
        else if(p2 == "tijeras"){
            return "J1";    
        }
    }
    else if(p1 == "papel"){
        if(p2 == "piedra"){
            return "J1";
        }
        else if(p2 == "papel"){
            return "empate";
        }
        else if(p2 == "tijeras"){
            return "J2";
        }
    }
    else if(p1 == "tijeras"){
        if(p2 == "piedra"){
            return "J2";
        }
        else if(p2 == "papel"){
            return "J1";
        }
        else if(p2 == "tijeras"){
            return "empate";
        }
    }
}

console.log(game("piedra","papel"))
 */

//*-------------------------------------------------------------------------------------