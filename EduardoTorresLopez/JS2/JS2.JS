/* Ejemplo arreglo */

let equipos = ["tigres","rayados","america"];

console.log("tipo de dato",
            typeof equipos);

console.log("Datos",
            equipos);

console.log("total equipos",
            equipos.lenght);

console.log("Primer equipo",
            equipos[0]);

console.log("ultimo equipo",
            equipos[-1]);

console.log("ultimo",
            equipos[equipos.lenght-1]);

equipos.push("necaxa");

console.log(equipos);
console.log("ultimo", equipos.pop());


/* Definir un objeto */
let materias = ["web", "conta", "costos"]

let grupo52 = {
    "nombre" : "grupo 52",
    "semestre" : 5,
    "carrera" : "LTI",
    "materias" : materias
};

console.log(grupo52);

console.log("nombre:", grupo52[0]); /error/
console.log("nombre:", grupo52["nombre"]);
console.log("nombre:", grupo52.nombre);
console.log("Primer materia",
            grupo52["materias"][0]);

console.log("Primer")

/* let carrera = prompt("¿Cual es tu carrera?"); */

/* let edad = Number(prompt("Ingresa tu edad: ")); */

document.write("<h1>Esto es un titulo</h1>");
document.write(`<ul>
                    <li>LTI</li>
                    <li>LA</li>
                    <li>CP</li>
                    <li>LNI</li>
                </ul>`);

/* Ejemplo IF */

let calif = 900;

if(calif >= 95 && calif ){
    console.log("Excelente");
}