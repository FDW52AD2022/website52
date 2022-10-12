let equipos = ['Rayados', 'Tigres', 'America', 'Chivas'];
console.log('Total de equipos: ', equipos.length)
console.log('Primer equipo', equipos[0]);
console.log('Ultimo equipo', equipos[ equipos.length - 1]);
equipos.push('necaxa');

console.log(equipos)
console.log('ultimo', equipos.pop());

// Definir un objeto
let materias = ["web", "contabilidad", "costos"];
let grupo52 = {
     'nombre'   : 'grupo 52',
     'semestre' : 5,
     'carrera'  : 'LTI',
     'materias' : materias
};

//Accediendo a objeto
console.log(grupo52);
console.log('nombre:', grupo52['nombre']) //Propiedad por corchetes
console.log('nombre:', grupo52.nombre) //Propiedad por punto
console.log('Primer materia: ', grupo52.materias[0]);
console.log('Ultima materia: ', grupo52['materias'][materias.length - 1] );

grupo52.facultad = 'FacPyA'

// Clases
/* PLantillas para la creación de clases */


// FUNCIONES ÚTILES
// Solicitar Datos
// -> let carrera = prompt('¿Cuál es tu carrera?')

// Escribir en el documento
document.write('<h1>HOLA MUNDO</h1>')
document.write(`
     <ul>
          <li>LTI</li>
          <li>LA</li>
          <li>CP</li>
          <li>LNI</li>
     </ul>
`)

//Sentencias condicionales
// If simple
let calificacion = 90;

if ( calificacion >= 95 ) {
     console.log( 'Excelente' );
}

// If compuesto
if ( calificacion >= 95 && calificacion <= 100 ) {
     console.log( 'Excelente' );
}
else {
     console.log( 'No Excelente' );
}

// if anidado
if ( calificacion >= 95 ) {
     console.log( 'Excelente' );
}
else if (calificacion >= 90 ) {
     console.log( 'Muy Bueno' );
}
else if (calificacion >= 85) {
     console.log( 'Bueno' );
}
else {
     console.log('Terminado');
}

// Switch
let estadoCivil = 'casado';
switch ( estadoCivil ) {
     case 'soltero':
          //sentencia
          break;
     case 'casado':
          //sentencia
          break;
     case 'viudo':
          //senetncias
          break;
     default:
          //sentencias
          break;
};


// SENTENCIAS DE CONTROL - CICLOS CONDICIONALES
// while
let numero = 1
while ( numero < 11 ) {
     console.log( numero );
     numero++;
}

// do while
numero = 1;
do {
     console.log(numero);
     numero++;
} while (numero < 11);

// for
for (let i = 1; i < 11; i++) {
     console.log(i);
}

/* for (let i = 1; i <= 100; i++) {
     let codigo = '<marquee>' + i + '</marquee>';
     document.write(codigo);
} */


//EJERICCIO JS
let horasTrab = prompt('Ingrese total de horas trabajadas: ');
let pagoHora = prompt('Pago por hora: ')
let pago = 0

if ( horasTrab > 40 ) {
     let horasExtra = horasTrab - 40;
     horasNormal = horasTrab - horasExtra;

     let pagoNormal = horasNormal * pagoHora;
     let extra = (horasExtra * pagoHora * 3);
     pago = pagoNormal + extra;
}
else {
     pago = horasTrab * pagoHora;
}

console.log('Pago semanal es de: $' + pago);