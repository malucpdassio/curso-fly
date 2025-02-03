function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nameGame = gameClicado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains ('dashboard__item__img--rented')){
        

        if(confirm(`Você quer devolvero o jogo ${nameGame.textContent}?`)){
            imagem.classList.remove ("dashboard__item__img--rented");
            botao.classList.remove ("dashboard__item__button--return");
            botao.textContent = 'Alugar';
            qntAlugado()
        } 
    }else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }

    
}

