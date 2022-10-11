//ejemplo arreglo

let equipos = ["tigres","rayados","america"];

console.log("Tipo de dato" ,
        typeof equipos);

console.log("Datos" , 
            equipos);

console.log("total equipos" ,
            equipos.length);

console.log("Primer equipo" ,
            equipos[0]);

console.log("Ultimo equipo" ,
            equipos[-1]);

console.log("ultimo" ,
            equipos[equipos.length-1]);

equipos.push("necaxa");

console.log(equipos);
console.log("ultimo",equipos.pop());

//definir un objeto
let materias =["web" , "conta" ,"costos"];

let grupo52 = {
    "nombre" : "grupo 52" ,
    "semestre" : 5 ,
    "carrera" : "LTI" ,
    "materias" : materias

};

console.log(grupo52);

console.log("nombre:" , grupo52[0]); //error
console.log("nombre:" , grupo52["nombre"]);
console.log("nombre:",grupo52.nombre);
console.log("Primer materia:" ,
            grupo52["materias"][0]);

console.log("Primer materia:" ,
            grupo52.materias[0]);

grupo52.facultad = "facpya";

console.log(grupo52);

//let carrera = prompt("Cual es tu carrera?");

document.write("<marquee>Hola</marquee>")

document.write(`<ul>
        <li>LTI</li>
        <li>LA</li>
        <li>CP</li>
        <li>LNI</li>
    </ul>`)

//ejemplo if

let calif = 900;

if (calif >= 95 && calif <= 100) {
    console.log("Excelente");
}
else {
    console.log("No Excelente");
}

//switch

let numero = 3;

switch (numero) {
    case 1:
        console.log("uno")
        break;
    case 2:
        console.log("dos")
        break;
    case 3:
        console.log("tres")
        break;
    case 4:
        console.log("cuatro")
        break;
    default:
        console.log("error");
        break;
}

//ciclo for

for( let i=1; i<=100; i++) {
    let codigo = "<marquee>" + i + "</marquee>";
    document.write(codigo );
}

for( let i=10; i>=1 ; i-- ) {
    document.write(i + "<br>")
}

/* Escribir un programa en Javascript que permita
calcular el total a pagar a un empleado.
Solicitar el numero de horas trabajadas y el pago por hora.
Pagar las horas extras al triple. Se consideran las primeras 40 horas como normales*/

let HorasTrabajadas = 42;
let PagoxHora = 100;

if(HorasTrabajadas >= 40){
    let horas_extra = (HorasTrabajadas - 40);
    let pago_extra = (horas_extra * PagoxHora * 3);
    let total = (PagoxHora * 40 + pago_extra);
    console.log(total)
}
else{
    total = (HorasTrabajadas * PagoxHora);
    console.log(total)
}