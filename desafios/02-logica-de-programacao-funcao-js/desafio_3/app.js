function calculoImc(altura,peso){
    let imc = peso/altura**2;
    return imc;
}

let resultado = calculoImc(1.60,50.5);
console.log(resultado);

function calculoFatorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    } 

    let fatorial = 1
    for(let i = 2; i <= numero; i++){
        fatorial *= i

        //fatorial *= i => i*fatorial
    }
    return fatorial
}

let calculo = calculoFatorial(6);
console.log(calculo)