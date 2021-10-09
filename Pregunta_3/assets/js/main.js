// Pseudocódigo

// Inicio 
//     Ingresar Temperatura Celsius
//     Realizar operación a Kelvin 
//     Realizar operación a Fahrenheit
//     Mostrar resultado
// Fin

// ingresando dato de grados celsius y constante Kelvin
let temp = prompt("Ingresa una temperatura sin el simbolo de '°'", "35");
const kel0 = 273.15

// Almacenando operacion de transformar los grados celsius a Kelvin y Fahrenheit
let kelT = parseInt(temp) + kel0;
let fahr = (parseInt(temp) * (9/5)) + 32;

// Mostrando en el DOM la transformación de grados Celsius a Kelvin y Fahrenheit
document.write(`<h3>La conversión de ${temp}° Celsius a grados Kelvin es igual a: ${kelT}° K </h3>`)
document.write(`<h3>La conversión de ${temp}° Celsius a grados Fahrenheit es igual a: ${fahr}° F</h3>`)

