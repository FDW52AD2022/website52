/* Ejemplo arreglo */

let equipos = ["tigres", "rayados", "america"];

console.log("Tipo de dato",
            typeof equipos);

console.log("Datos",
            equipos);

console.log("Toral equipos",
            equipos.length);

console.log("Primer equipo",
            equipos[0]);

console.log("Ultimo",
            equipos[equipos.length-1]);  /* consulta el ultimo elemento */

equipos.push("necaxa"); /* agrega un elemento al final */

console.log(equipos);

console.log("ultimo",
            equipos.pop());  /* saca el ultimo elemtento */


/* Definir un objeto */

let materias = ["web","conta","costos"];

let grupo52 = {
    "nombre" : "grupo 52",
    "semestre": 5,
    "carrera": "LTI",
    "materias": materias
};

console.log(grupo52);

/* console.log("nombre", grupo52[0]); */ /* Error no sirve */
console.log("nombre", grupo52["nombre"]); /* Si sirve */
console.log("nombre", grupo52.nombre);

console.log("Primer materia:",
            grupo52["materias"][0]);

console.log("Primer materia:",
            grupo52.materias[0]);

grupo52.facultad = "facpya";

console.log(grupo52);

/* let carrera = prompt("Cual es tu carrera?"); */ /* para solicitar datos de entrada */

document.write("<marquee>Hola</marquee>");

document.write(`<ul>
                    <li>LTI</li>
                    <li>LA</li>
                    <li>CP</li>
                    <li>LNI</li>
                </ul>`);

/* Ejemplo de IF */

let calif = 90

if (calif >= 95 && calif <=100) {
    console.log("Excelente")
}
else {
    console.log("No excelente")
}


/* switch */

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
        console.log("cinco");
        break;
    default:
        console.log("error")
        break;
}


/* Ciclo for  */

for(let i=1;i<100;i++) {
    let codigo = ("<marquee>"+ i +"</marquee>");
    document.write(codigo);
}


for(let i=10;i>=1;i--) {
    document.write(i + "<br>");
}


/* Escribir un programa en javascrip que permita
calcular el total a pagar a un empleado.
Solicitar el numero de horas trabajadas y el pago
por hora. Pagar las horas extra al triple. 
Se consideran las primeras 40 hras como normales */

let hras_trabajadas = 43;
let pago_hra = 10;

if (hras_trabajadas <= 40 ) {
    let pago_total = hras_trabajadas * pago_hra;
    console.log(pago_total);
}
else {/* 
    let horaextra = hras_trabajadas - 40;
    let pagoextra = horaextra * pago_xhra; */
    let pago_total = (hras_trabajadas * pago_hra);
    console.log(pago_total);
}
