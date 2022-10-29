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