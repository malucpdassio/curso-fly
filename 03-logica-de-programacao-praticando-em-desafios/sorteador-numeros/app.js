function sortear(){ 
    let quantidadeSorteada = parseInt(document.getElementById('quantidade').value);
    let contagemInicial = parseInt(document.getElementById('de').value);
    let contagemFinal = parseInt(document.getElementById('ate').value);
    let numeroSorteado = [];


    for (i = 0; i < quantidadeSorteada; i++){
        numeroSorteado.push(sortearNumeroAleatorio(contagemInicial,contagemFinal));
    }

    console.log(numeroSorteado);

}

function sortearNumeroAleatorio(min,max){

    return parseInt(Math.random() * (max - min) + min);
  
}