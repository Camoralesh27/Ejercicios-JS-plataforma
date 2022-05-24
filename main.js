
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
