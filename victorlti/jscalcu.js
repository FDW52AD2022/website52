let suma = parseInt(document.getElementById("select").value);
let resta=parseInt(document.getElementById("select").value);
let multi=parseInt(document.getElementById("select").value);
let divi=parseInt(document.getElementById("select").value);

function calcu(){
let num1=parseInt(document.getElementById("num1").value);
let num2=parseInt(document.getElementById("num2").value);
let resul=document.getElementById("resul");

if(select==1){
    resul.value=num1+num2;
}
    else if(select==2){
        resul.value=num1-num2;
    }
        else if(select==3){
            resul.value=num1*num2;
        }
            else if(select==4){
                resul.value=num1/num2;
            }
}
