//DESAFIO 01
function boasVindas(){
    console.log('Olá tudo bem?');
}
boasVindas();

//let nome  = prompt ('Qual seu nome?');
//function seuNome(nome){
   // console.log(`Óla ${nome}`);
//}
//seuNome(nome);

function numeroDobrado(num){
    return num * 2;
}
let resultadoDobro = numeroDobrado(5);
console.log(resultadoDobro);

function mediaNumerica(num1, num2, num3){
    return (num1 + num2 + num3)/3;
}

let resultadoMedia = mediaNumerica(3,9,6);
console.log(resultadoMedia);

function maiorNumero(num1, num2){
    if(num1 < num2){
        console.log(num2);
    }else{
        console.log(num1);
    }
}

maiorNumero(0,5);

function multiplicacaoDeleMesmo(num){
    return num * num;
}

let resultado = multiplicacaoDeleMesmo(4)
console.log(resultado)