function nombre(){}
const nombre = function(){};
const nombre = () => {};










function divisores(numero){
    let total = 0;

    for(let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
}


console.log("total de divisores", divisores(32));


const divisoresV2 = function(numero){
    let total = 0;
    i
    for(let i=1; i <=numero; i++){

        if(numero % i == 0){
            total++;
        }
    }
    return total;
};


console.log("total de divisores", divisoresV2(32));

const divisoresV3 = (numero) => {
    let total = 0;
    i
    for(let i=1; i <=numero; i++){

        if(numero % i == 0){
            total++;
        }
    }
    return total;
};
function calcular() {
    /* console.log("hola desde el boton") */
    let numero = parseInt(document.getElementById("numero").value);


    let resultado =
    document.getElementById("resul");

    resultado.value = divisores(numero);

} 
console.log("total divisoresV3", divisores(32));
