// Pseudocódigo 

// Inicio 
//     Usuario Ingresa un número *5
//     ¿Estos números son mayores a 0? Si: Continuar | No: Volver a pedirlos
//     Almacenar Operacion Suma 
//     Alacenar operación promedio
//     Mostrar Suma 
//     Mostrar Promedio
// Fin

// Ingresando 5 números todos ellos mayores a 0 y que sean números

let num1;
let num2;
let num3;
let num4;
let num5;

do {
    num1 = parseInt(prompt("Ingrese un Primer número mayor a 0" , "1"));
    num2 = parseInt(prompt("Ingrese un Segundo número mayor a 0" , "2"));
    num3 = parseInt(prompt("Ingrese un Tercer número mayor a 0" , "3"));
    num4 = parseInt(prompt("Ingrese un Cuarto número mayor a 0" , "4"));
    num5 = parseInt(prompt("Ingrese un Quinto número mayor a 0" , "5"));
} while (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5) || num1 <= 0 || num2 <= 0 || num3 <= 0 || num4 <= 0 || num5 <= 0);

// Almacenando operaciones

let suma = num1 + num2 + num3 + num4 + num5
let prom = suma/5

// Mostrando datos en el DOM
document.write(`<h2>La suma de ${num1}, ${num2}, ${num3}, ${num4}, ${num5} es igual a ${suma}</h2>`);
document.write(`<h2>El promedio de ${num1}, ${num2}, ${num3}, ${num4}, ${num5} es igual a ${prom}</h2>`);