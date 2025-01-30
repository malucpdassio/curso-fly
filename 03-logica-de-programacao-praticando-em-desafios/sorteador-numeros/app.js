function sortear(){ 
    let quantidadeSorteada = parseInt(document.getElementById('quantidade').value);
    let contagemInicial = parseInt(document.getElementById('de').value);
    let contagemFinal = parseInt(document.getElementById('ate').value);
    let listadeNumeroSorteado = [];
    let numero

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }
    
    for (i = 0; i < quantidadeSorteada; i++){

        numero = sorteadorDeNumeroAleatorio(contagemInicial,contagemFinal);

        
        while(listadeNumeroSorteado.includes(numero)){
            numero = sorteadorDeNumeroAleatorio(contagemInicial,contagemFinal);
           
        }
        
        listadeNumeroSorteado.push(numero);
    
    }

  

    
    if(listadeNumeroSorteado != 0 ){
        mensagemDoResultado(`<label class="texto__paragrafo"> Números sorteados: [ ${listadeNumeroSorteado} ] </label>`);
       
    } else {
        mensagemDoResultado(`<label class="texto__paragrafo"> ERRO! Reinicie o jogo </label>`);
    }

    alteracaoDoReiniciar() 
}

function sorteadorDeNumeroAleatorio(min,max){

    return parseInt(Math.random() * (max - min) + min);
  
}

function mensagemDoResultado(resultado){

    let mensagem = document.getElementById('resultado');
    mensagem.innerHTML = resultado;

}

function alteracaoDoReiniciar(){
    
    let botao = document.getElementById('btn-reiniciar');
    
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
    //O classList é uma forma selecionar a class do HTML, podendo realizar alterações dentro dela.
    // Contains é para caso exista uma class e se ela está contida em um id; O remove é para remover a classe selecionada e o add é para adicionar uma

}

function reiniciar(){
    limparCampo();
    mensagemDoResultado(`<label class="texto__paragrafo"> Números sorteados:  nenhum até agora </label>`);
    alteracaoDoReiniciar()
}

function limparCampo(){
    campo = document.getElementsByClassName('container__botao-desabilitado');
    campo.value = '';
   
}
