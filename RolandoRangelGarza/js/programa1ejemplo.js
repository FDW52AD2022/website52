let salario_total = 0;

let horas = 41;

let pago_hora = 20;


/* Si no tiene horas extras */
if( horas <= 40 ) {
    let salario_total = horas * pago_hora;
    console.log(salario_total);
}
/* Si tiene horas extras, a partir de 41 */
else {
    let salario_total = (40 * pago_hora) + ((horas-40) * (pago_hora*3));
    console.log(salario_total);
}