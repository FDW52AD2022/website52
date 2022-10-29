/*Ejemplo arreglo*/

let equipos = ["tigres","rayados","america"];

console.log("Tipo de dato",
        typeof equipos);

console.log("Datos",
            equipos);

console.log("total equipos",
            equipos.length);

console.log("Primer equipo",
            equipos[0]);

console.log("ultimo equipo",
            equipos[-1]);

console.log("ultimo",
            equipos[equipos.length-1]);

equipos.push("necaxa");

console.log(equipos);
console.log("ultimo", equipos.pop());

/* alt + shift + A, es para poner comentarios*/

/* Definir un objeto */
let materias = ["web","conta","costos"];

let grupo52 = {
    "nombre" : "grupo 52",
    "semestre" : 5,
    "carrera" : "LTI",
    "materias" : materias
};

console.log(grupo52);

console.log("nombre:", grupo52[0]); /* error */
console.log("nombre:", grupo52["nombre"]); /* error */
console.log("nombre:", grupo52.nombre);
console.log("Primer materia:",
            grupo52["materias"][0] );

console.log("Primer materia:",
            grupo52.materias[0] );


/* let carrera = prompt("Ingresa tu carrera"); */

document.write("<marquee>Hola<marquee>")

/* document.write(`<ul>) */

/* Ejemplo if */

let calif = 900;

if (calif >= 95 && calif <=100) {
    console.log("Excelente");
}
else {
    console.log("No excelente");
}

let numero = 3;

switch (numero) {
    case 1:
        console.log("uno");
        break;
    case 2:
        console.log("dos");
        break;
    case 3:
        console.log("tres");
        break;
    case 4:
        console.log("cuatro");
        break;
    case 5:
        console.log("error");
        break;
}


/* Ciclo for */

for(let i=1; i<=100; i++){
    let codigo = "<marquee>" + i + "</marquee>";
    document.write(codigo)
}