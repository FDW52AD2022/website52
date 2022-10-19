let text
let hora = prompt("Hora en la que ingirio su primera medicina del dia")

switch(hora) {
    case hora > 23:
    document.write("ERROR,horario invalido")
    break;

    case hora = 23:
    console.log(hora)
    document.write("Horario maximo permitido")
    break;

}