function divisores(num){
    let total=0;

    const divisoresv2=function(numero){
        let total=0;
    };
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            total++;
        }
    }
    return total;
}
console.log("total divisaores", divisores(33));


const cuadraro = function(x){
    return x*x;
};

/*const cuadraro2 = function(x){
    return x*x;
};*/
