/*Funciones*/

function divisores(numero) {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
}

const divisoresV2 = function (numero) {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

const divisoresV3 = numero => {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

function calcular() {
    let numero = parseInt(document.getElementById("num").value);
    let resultado = document.getElementById("resul");
    
    resultado.value = divisores(numero);

}



function cambiar_imagen(){
    let numero_imagen = parseInt(document.getElementById("num-img").value);

    switch(numero_imagen){
        case 1:
            document.getElementById("imagen_mostrada").src="https://media.revistagq.com/photos/5f45010acb266484bb785c78/master/pass/dragon-ball-z.jpg";
            break;
        case 2:
            document.getElementById("imagen_mostrada").src="https://www.fayerwayer.com/resizer/IFDwJu7kabStkcE9UOcxbdYWHFw=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VBRF4I3YM5G63AU637TTONVARE.jpg";
            break;
        case 3:
            document.getElementById("imagen_mostrada").src="https://codigoespagueti.com/wp-content/uploads/2022/08/Gohan-dragon-ball-z-ejercito-freezer-fanart.jpg";
            break;
        case 4:
            document.getElementById("imagen_mostrada").src="https://i.blogs.es/263858/trunks-del-futuro-en-dragon-ball/1366_2000.jpg";
            break;
        case 5:
            document.getElementById("imagen_mostrada").src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2020/12/Broly.jpg?fit=1200%2C675&quality=80&ssl=1";
   
    }

}

/*Llamar la funcion
console.log("   divisores:", divisores(numero));
console.log("divisores v2:", divisoresV2(33));
console.log("divisores v3:", divisoresV3(33));*/

