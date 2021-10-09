// Pseudocódigo

// Inicio 
//     Leer num1 
//     leer num2
//     ¿Es un número entero mayor que 0? Si: Avanzar | No: Volver a pedir 
//     Realizar operación Aritmetica 
//     Mostrar resultado 
// Fin

// ingreso de dos números mayores a 0 por el usuario y distintos entre si
let num1 
let num2 

do {
   num1 = prompt("Ingrese un primer número mayor a 0 aquí: ", "3");
   num2 = prompt("Ingrese un segundo número mayor a 0 aquí: ", "6");
} while (num1 <= 0 || num2 <=0);

// Almacenando operaciones aritmeticas
let suma = parseInt(num1) + parseInt(num2);
let resta = parseInt(num1) - parseInt(num2);
let multi = parseInt(num1) * parseInt(num2);
let divi = parseInt(num1) / parseInt(num2);
let modul = parseInt(num1) % parseInt(num2);

// mostrando DOM las respuestas operaciones aritmeticas
document.write (`<h3> La suma de ${num1} y ${num2} es igual a : ${suma} </h3>`)
document.write (`<h3> La resta de ${num1} y ${num2} es igual a : ${resta} </h3>`)
document.write (`<h3> La multiplicación de ${num1} y ${num2} es igual a : ${multi} </h3>`)
document.write (`<h3> La división de ${num1} y ${num2} es igual a : ${divi} </h3>`)
document.write (`<h3> El modulo de ${num1} y ${num2} es igual a : ${modul} </h3>`)