let equipos=["tigres", "rayados", "america" ];
console.log("tipo de dato", typeof equipos);
console.log("datps", equipos);
console.log("total equipos", equipos.length);
console.log("primer equipo", equipos[0]);
console.log("ultimo equipo", equipos[-1]);
console.log("ultimo", equipos[equipos.length-1]);

equipos.push("necaxa");
console.log(equipos);
console.log("ultimo", equipos.pop());

/*dfinir objeto*/
let grupo52={
    "nombre":"grupo 53",
    "semestre": 5,
    "carrera":"lti",
    "materias": materias
};
console.log(grupo52);
console.log("nombre:", grupo52[0]);/*error*/
console.log("nombre:", grupo52["nombre"]);
console.log("nombre:", grupo52.nombre);
console.log("primer materia: "[0]);

console.log("primer materia: ", grupo52.materias[0]);

grupo52.facultad="facpya";
console.log(grupo52);

let carrera=prompt("cual es tu carrera");
document.write("hola mundo");
document.write(`<ul>
    <li>lti </li>
    <li> la</li>
    <li>cp </li>  
    <li> lni</li>  
             </ul>`);

/*ejemplo if */
let calif=90;
if(calif>=95 && calif<=100)
{
console.log("excenelente");
}
else{
    console.log("no excenelnete");
}

/* switch */
let numero=3;
switch (numero) {
case 1: console.log("uno");
    break;
case 2: console.log("dos");
    break;
case 3:console.log("tres");
    break;
case 4: console.log("cuatro");
    break;
default:
    case console.log("error"):
    break;
}
 /*CICLO FOR */
for(let i=1;i<=10;i++){
    let codigo="<marquee>"+i+"</marquee>";
    document.write(codigo);
}
for(let i=10;i>=1;i++){
    document.write(i+"<br>");
}










