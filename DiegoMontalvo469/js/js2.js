/* Ejemplo arreglo */

let equipos = ["tigres","rayados","america"];

console.log("Tipo de dato",
            typeof equipos);

console.log("Datos",
            equipos);

console.log("Total equipos",
            equipos.length);

console.log("Primer equipo",
            equipos[0]);

console.log("Ultimo equipo",
            equipos[-1]);

console.log("Último",
            equipos[equipos.length-1]);

equipos.push("necaxa");

console.log(equipos);
console.log("ultimo", equipos.pop());


/* Definir un objeto  */
let materias = ["web","conta","costos"];

let grupo52 = {
     "nombre" : "grupo 52",
     "semestre" : 5,
     "carrera" : "LTI",
     "materias" : materias,
};

console.log(grupo52);

console.log("nombre:", grupo52[0]) /* error */
console.log("nombre:", grupo52["nombre"]) /* sí :D */
console.log("nombre:", grupo52.nombre);
console.log("Primer materia:",
             grupo52["materias"][0] );

console.log("Primer materia:",
             grupo52.materias[0] );

grupo52.facultad = "facpya";

console.log(grupo52);

// let carrera = prompt("¿Cuál es tu carrera?")


document.write("<marquee>Hola</marquee>");

document.write(`<ul>
                    <li>LTI</li>
                    <li>LA</li>
                    <li>CP</li>
                    <li>LNI</li>
                </ul>`);

// Ejemplo if

let calif = 90;


if (calif >= 95 && calif <=100) {
    console.log("Excelente :D");
}
else {
    console.log("No excelente D:")
}

// sentencia condicional múltiple switch

let estadoCivil = "casado";

switch (estadoCivil) {
    case "soltero":
        //sentencias
        break;
    case "casado":
        //sentencias
        break;
    case "viudo":
        //sentencias
    default:
        //sentencias
        break;
}

