function comprar(){
    // selecionar qual ingresso e quantidade
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    // diminuir a quantidade com os ingressos disponiveis
    if(tipoIngresso == 'pista'){
        comprarPista(quantidade);
    }else if(tipoIngresso == 'superior'){
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
   

}

function comprarPista(qnt){
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qnt > pista){
        alert('Quantidade de ingressos não disponivel.');
    }else{
        pista = pista - qnt;
        document.getElementById('qtd-pista').textContent = pista;
        alert('Compra Realizada com Sucesso');
    }
}

function comprarSuperior(qnt){
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qnt > superior){
        alert('Quantidade de ingressos não disponivel.');
    }else{
        superior = superior - qnt;
        document.getElementById('qtd-superior').textContent = superior;
        alert('Compra Realizada com Sucesso');
    }
}

function comprarInferior(qnt){
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qnt > inferior){
        alert('Quantidade de ingressos não disponivel.');
    }else{
        inferior = inferior - qnt;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert('Compra Realizada com Sucesso');
    }
}


