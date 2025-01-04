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
console.log(calculo);

function conversorReais(valor){
    let real = valor*4.8;
    return real; 
}

let conversor = conversorReais(4);
console.log (conversor);

function areaRetangular(base,altura){
    let area = base*altura;
    console.log(`A base é ${base}m e a altura é ${altura}m`);
    console.log(`A area é igual a ${area}m²`);
    return area;
}

let retangulo = areaRetangular(8,3);

function areaCircular(raio){
    let pi = 3.14;
    let area = pi*raio**2;
    console.log(`O Raio do circulo é ${raio}`);
    console.log (`Área = ${area}m²`)
    return area
}

let circulo = areaCircular(3)

function calculoTabuada(numero){
    let multiplicador = 0;
    let tabuada
    while(multiplicador <= 10){
        
        tabuada = numero * multiplicador;
        console.log(`${numero} x ${multiplicador} = ${tabuada}`);
        
        multiplicador++;
    }
    
}
let resultadoTabuada = calculoTabuada(5);