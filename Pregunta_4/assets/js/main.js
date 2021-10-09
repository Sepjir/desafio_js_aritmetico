// Pseudocódigo 

// Inicio 
//     Ingresar días
//     ¿Este dato ingresado es mayor a 0? Si: Continuar | No: Volver a preguntar
//     Almacenar Valor Años 
//     Almacenar Valor Semanas
//     Operar
//     Mostrar Resultado 
// Fin

// Usuario ingresa una cantidad de días
let dias

do {
    dias = prompt("Ingrese una cantidad de días" ,"373");
 } while (dias <= 0);

// estableciendo constantes de semanas y años en días
let valorAño = 365;
let valorSem = 7;

// almacenando operadores aritmeticos y modulos de años y semanas
let año = parseInt(dias) / valorAño;
let añoResto = parseInt(dias) % valorAño
let sem = parseInt(añoResto) / valorSem;
let semResto = parseInt(añoResto) % valorSem

// mostrando resultados en el DOM

document.write (`<h3>Los días ingresados corresponden a ${Math.floor(año)} años, ${Math.floor(sem)} semanas y ${semResto} días</h3>`);


