/*ejemplo arreglo */
/*
let equipos = ["tigres", "rayados","america"];

console.log("tipo de dato",
            typeof equipos);

console.log("datos",
            equipos);
        
console.log("total equipos",
            equipos.length);

console.log("primer equipo",
            equipos[0]);

console.log("ultimo equipo",
            equipos[equipos.length-1]);

equipos.push("necaxa");

console.log(equipos)

/* definir un objeto */
/*
let materias = ["web", "conta" ,"costos"];

let grupo52 = {
    "nombre" : "grupo 52",
    "semestre" : 5,
    "carrera" : "LTI",
    "materias" : materias 
};

console.log(grupo52)
console.log("nombre:", grupo52[0]); /* error */
/*
console.log("nombre:", grupo52["nombre"]); /* error   
console.log("nombre:", grupo52.nombre);
console.log("primer materia:", 
            grupo52["materias"][0]);

console.log("primer materia:", 
            grupo52.materias[0]);

grupo52.facultad = "facpya";

console.log(grupo52);

/* let carrera = prompt("cual es tu carrera"); 

document.write("<h1>Hola Mundo</h1>");

/* ejemplo if 

let calif = 90;

if (calif >= 95 && calif <= 100) {
    console.log("excelente");
}
else {
    console.log( "no excelente");
}

/* ejemplo switch */




/* escribir un programa en java que permita
calcular el total a pagar a un empleado 
solicitar numero de horas trabajadas y el pago por hora.
pagar las horas extra al triple. se consideran las primeras 40 hras como normales */





horas = Number(prompt("¿Cuantas horas trabajaste?"));
sbase= 25
sextra= sbase*3
if (horas<=40) {
    sueldo = horas * sbase;
    console.log("su sueldo es de ", sueldo);
}
else {
    sueldo = ((horas-40)*sextra)+((horas-(horas-40))*sbase);
    console.log("su sueldo es de ", sueldo);
}

document.write("su sueldo es de: ", sueldo);
