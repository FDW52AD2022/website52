/*EJEMPLO ARREGLO*/

let equipos = ["rayados", "tigres", "america"];
console.log("Tipo de dato", typeof equipos);

console.log("Datos", equipos);

console.log("total equipos", equipos.length);

console.log("Primer equipo", equipos[0]);

console.log("ultimo equipo", equipos[equipos.length - 1]);

equipos.push("necaxa");

console.log(equipos);
console.log("ultimo", equipos.pop());

console.log(equipos);

/* Definir un objeto */
let materias = ["web", "costos", "conta"];

let grupo52 = {
  nombre: "grupo 52",
  semestre: 5,
  carrera: "LTi",
  materias: materias,
};

console.log(grupo52);

console.log("nombre: ", grupo52[0]); /* error*/
console.log("nombre: ", grupo52["nombre"]);
console.log("nombre: ", grupo52.nombre);
console.log("Primer materia:", grupo52.materias[0]);

grupo52.facultad = "facpya";
console.log(grupo52);

/*let carrera = prompt("ingresa tu carrea");*/

document.write("<marquee>Hola</marquee>");

document.write(`<ul>
                    <li>LTI</li>
                    <li>LA</li>
                    <li>CP</li>
                    <li>LNI</li>
                </ul>`);

/* Ejemplo if */

let calif = 900;

if (calif >= 95 && calif <= 100) {
  console.log("excelente");
} else {
  console.log("No excelente");
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

}


for (let i=1; i<=100;i++){
    let codigo = "<marquee>" + i + "</marquee>";
    document.write(codigo);
}


for (let i=1; i<=1;i--){
    document.write(i + "<br>");
}


let ht=28;
let pagoxhora=30;



if(ht <= 40){
    pago= ht*pagoxhora;
    console.log(pago);
}

else{
    he=ht-40;
    she=he*40;
    pago=she+40*pagoxhora;
    console.log(pago);

}