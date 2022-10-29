/* Ejemplo arreglo */
/* Arreglos por indicie */
let equipos = ["Tigres", "Rayados", "America"];

console.log("Tipos de datos", typeof equipos);

console.log("Datos", equipos);

console.log(
  "total equipos",

  equipos.length
);

console.log("Primer Equipo", equipos[0]);

console.log("ultimo equipo", equipos[-1]);

console.log("ultimo", equipos[equipos.length - 1]);

equipos.push("Necaxa");

console.log(equipos);

console.log("ultimo", equipos.pop());

/* Declaracion de variables */
/* Definir un objeto */

let materias = ["Web", "Conta", "Costos"];

let grupo52 = {
  nombre: "grupo52",
  semestre: 5,
  carrera: "LTI",
  materias: materias,
};

console.log(grupo52);
console.log("nombre:", grupo52[0]); /* ERROR */
console.log("nombre:", grupo52["nombre"]); /* ERROR */
console.log("nombre:", grupo52.nombre);
console.log("primer materia:", grupo52["materias"][0]);

console.log("primer materia:", grupo52.materias[0]);

grupo52.facultad = "facpya";
console.log(grupo52);

const newLocal = "";
/* Un constructor es una funcion que tiene como objetivo crear un objeto, se incova automaticamente cuando se crea un objeto */

/* FUNCIONES UTILES */
/* --PROMPT-- Para solicitar datos de entrada */
/* let carrera = prompt("¿Cual es tu carrera?"); */

/* --NUMBER--Para convertir una cadena a numero*/

/* Para escribir en el documento */
document.write("<marquee>Hola</marquee>");

document.write(`<ul>
                    <li>LTI</li>
                    <li>LA</li>
                    <li>CP</li>
                    <li>LNI</li>
                </ul>`);

// Sentencias condicionales
// IF-Simple
// IF- compuestos es la que tiene else tambien
let calif = 90;

if (calif >= 95 && calif <= 100) {
  console.log("Excelente");
} else {
  console.log("No excelente");
}

// Sentencia condicional simple SWITCH
// SU OBJETIVO ES REVISAR EL VALOR DE UNA VARIABLE Y EN VASE A ESE VALOR SE REALIZA UNA ACICON
// El break tiene que ir a fuerza, sino continua

//SWITCH ES UN TIPO ELIF PERO EN JAVASCRIPT

let numero = 3;
switch (numero) {
  case 1:
    console.log("UNO");
    break;
  case 2:
    console.log("DOS");
    break;
  case 3:
    console.log("TRES");
    break;
  case 4:
    console.log("CUATRO");
    break;
  case 5:
    console.log("CINCO");
    break;

  default:
    console.log("ERROR");
    break;
}
 
//CICLOS 
//while


// do while

//CLCLO for
for(let i=1; i<=100; i++){
    let codigo = "<marquee>" + i + "</marquee>";
    document.write(codigo);
}
//br es igual a break que salta un espacio 
for(let i=10;i>=1; i--){
    document.write(i + "<br>");
}