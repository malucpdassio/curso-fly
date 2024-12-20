function calculoImc(altura,peso){
    let imc = peso/altura**2;
    return imc;
}

let resultado = calculoImc(1.60,50.5);
console.log(resultado);

function calculoFatorial(num){
    if (num == 0 || num == 1){
        return num == 0;
    } else {
        while (num != num){
            num  = num * (num - 1);

        }
    }
}

let calculo = calculoFatorial(5);
console.log(calculo)