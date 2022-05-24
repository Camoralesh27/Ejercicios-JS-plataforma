





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

//----------------------------------------------------------------------

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

//------------------------------------------------------------------------------------
