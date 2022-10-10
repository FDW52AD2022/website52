// ejemplo de array

let equipos = [
"Tigres", "Rayados", "America"
];

// Tipo de dato del array
console.log("Tipo de dato: ", typeof equipos);

// Desplegar el array
console.log("Datos del array: ", equipos);

// Cantidad de elementos del array
console.log("Total de equipos: ", equipos.length);

// Primer elemento del array
console.log("Primer equipo: ", equipos[0]);

// Último elemento del array, se usa con length-1
console.log("Último equipo: ", equipos[equipos.length - 1])

// Agregar elementos al array, hasta el final

console.log("Nuevo equipo: ");
equipos.push("Necaxa");
console.log(equipos)

// Identificar último elemento del array y sacarlo

console.log("Último equipo y eliminado: ", equipos.pop());
console.log("Equipos después de la eliminación: ", equipos)

// Definir un objeto

// Array
let materias = ["Desarrollo Web", "Almacenes", "Finanzas"];

// Objeto como ta
let grupo52 = {
    "nombre" : "grupo 52",
    "semestre" : 5,
    "carrera" : "LTI",
    "materias" : materias
}

console.log("Objeto creado:");
console.log(grupo52);

// Los elementos se acceden por llaves, no por indices

// Esto es un error
console.log("Elemento mal referenciado: ", grupo52[1]);

// Esto está bien
console.log("Elemento bien referenciado: ",grupo52["carrera"]);

// Así se ve más bonito
console.log("Elemento bien referenciado y simplificado: ", grupo52.carrera);

// Primer materia
console.log("Primer materia: ", grupo52.materias[0])

// AGREGAR ELEMENTOS AL OBJETO
grupo52.facultad = "FACPyA";
console.log("Objeto con el nuevo elemento: ", grupo52);

// Pedir entrada manual de datos (input)
// let carrera = prompt("¿Cuál es la carrera?")

// Convertir input a number
// let edad = Number(prompt("Ingresa tu edad: "));

// Escribir sobre el documento html
document.write("<marquee>Hola!</marquee>")
document.write(`
    <ul>
        <li>LTI</li>
        <li>LA</li>
        <li>CP</li>
        <li>LNI</li>
        <li>LGRS</li>
    </ul>
`)

/* ESTRUCTURAS DE CONDICIÓN */
console.log("Estructuras de condición");
//Variable de ejemplo
let calif = 90;

// IF simple

if( calif => 90 ) {
    console.log("Sos un championship")
}

// IF compuesto

if( calif >= 90 ) {
    console.log("Excelente!")
}
else {
    console.log("No excelente :(");
}

//IF anidado

if( calif => 95 && calif <= 100  ) {
    console.log("Championship");
}
else if( calif == 92 ) {
    console.log("Atalaya");
}
else if( calif == 0 ) {
    console.log("Burro, salte de LTI");
}
else {
    console.log("Ni pa la muela padrino");
}

// switch

let numero = 2;

switch (numero) {

    case 1:
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    case 3:
        console.log("Tres");
        break;
    default:
        break;
}

// Ciclo for, baby

for( let i=1; i<=100; i++) {
    let codigo = "<marquee>" + i + "</marquee>";
    document.write(codigo );
}

for( let i=10; i>=1 ; i-- ) {
    document.write(i + "<br>")
}
