//Ejemplo de Arreglo (diferentes: telefonos, cosas)
let equipos = ["tigres","rayados","america"];
console.log("Tipo de dato" ,
        typeof equipos);
console.log("Datos" , 
            equipos);
console.log("total equipos" ,
            equipos.length);
console.log("Primer equipo" ,
            equipos[0]);
/*No jala con -1*/
console.log("Ultimo equipo" ,
            equipos[-1]);
/*Tendría que ser de esta manera -1*/
console.log("Último equipo" ,
            equipos[equipos.length-1]);
/*agregar equipos nuevos*/
equipos.push("necaxa");
console.log(equipos);
console.log("ultimo",equipos.pop());
//-------------------------------------------------------- 

//Definir un Objeto (lo mismo: nombrre, matriculas)
let materias =["web" , "conta" ,"costos"];

let grupo52 = {
    "nombre" : "grupo 52" ,
    "semestre" : 5 ,
    "carrera" : "LTI" ,
    "materias" : materias

};

console.log(grupo52);

console.log("nombre:" , grupo52[0]); //marca error de esta manera
console.log("nombre:" , grupo52["nombre"]); /*De esta manera sería*/ 
console.log("nombre:",grupo52.nombre); /*Y todavía más facil de esta manera*/
console.log("Primer materia:" ,
            grupo52["materias"][0]); /*Acceder a la primer matia*/ 

console.log("Primer materia:" ,
            grupo52.materias[0]); /*Otra forma de indicar o acceder a la primer matia con [] indicas la materia*/ 

grupo52.facultad = "facpya"; /*Crear un elemento*/

console.log(grupo52);
//--------------------------------------------------------
//Para Pedir Datos //let carrera = prompt("Cuál es tu carrera"
document.write("<marquee>GOOOOOOOL</marquee>") //Para hacer una transacción

document.write(`<ul>
        <li>LTI</li>
        <li>LA</li>
        <li>CP</li>
        <li>LNI</li>
    </ul>`)
//--------------------------------------------------------
//Sentencias
let calif = 900;

if (calif >= 95 && calif <= 100) {
    console.log("Excelente");
}
else {
    console.log("No Excelente");
}
// switch
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
//Ciclo for
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

