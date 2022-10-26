//funcion con nombre
function divisores(num){
    let total = 0;
    for(let i=1; i <=numero; i++){
        if(num % i == 0){
            total++;
        }
    }
    return total;

}
//Funcion anonima
const divisoresV2 = function(numero){
    let total = 0;
    for(let i=1; i <=numero; i++){
        if(num % i == 0){
            total++;
        }
    }
    return total;
};

//funcion flecha
const divisoresV3 = (numero) => {
    let total = 0;
    for(let i=1; i <=numero; i++){
        if(num % i == 0){
            total++;
        }
    }
    return total;
};

function calcular(){
    let numero = 
    parseInt(document.getElementById("numero").Value);

    let resultado =
    document.getElementById("resul");

    resultado.Value = divisores(numero);

}



console.log("Total divisores",divisoresV3(32));
console.log("Total divisores",divisoresV2(32));
console.log("Total divisores",divisores(32));
