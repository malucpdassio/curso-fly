function sortear(){ 
    let quantidadeSorteada = parseInt(document.getElementById('quantidade').value);
    let contagemInicial = parseInt(document.getElementById('de').value);
    let contagemFinal = parseInt(document.getElementById('ate').value);
    let numeroSorteado = [];
    let numero

    for (i = 0; i < quantidadeSorteada; i++){

        numero = sorteadorDeNumeroAleatorio(contagemInicial,contagemFinal);

        while(numeroSorteado.includes(numero)){
            numero = sorteadorDeNumeroAleatorio(contagemInicial,contagemFinal);
        }
        
        numeroSorteado.push(numero);
    }

  

    
    if(numeroSorteado != 0 ){
        mensagemDoResultado(`<label class="texto__paragrafo"> Números sorteados: [ ${numeroSorteado} ] </label>`);
       
    } else {
        mensagemDoResultado(`<label class="texto__paragrafo"> ERRO! Reinicie o jogo </label>`);
    }
}

function sorteadorDeNumeroAleatorio(min,max){

    return parseInt(Math.random() * (max - min) + min);
  
}

function mensagemDoResultado(resultado){
    let mensagem = document.getElementById('resultado');
    mensagem.innerHTML = resultado;
}