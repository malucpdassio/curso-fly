//Criar Variaveis de nomes escolhidos e um array
//adicionar nomes dentro da array
//sortear aleatoriamente os nomes da array
//limpar os campos


let listaDeNomes = [];

function adicionar(){
    let nomesEnviados = document.getElementById('nome-amigo').value;
    let listaDeAmigo = document.getElementById('lista-amigos');

    if(nomesEnviados == listaDeNomes){
        alert(`Nome informado já foi escolhado.`);
    } else {
        listaDeNomes.push(nomesEnviados);
        listaDeAmigo.textContent = listaDeNomes;
    }

}
function sortear(){
    let sorteados = document.getElementById('lista-sorteio')

    embaralha(listaDeNomes);
    for(let i = 0; i < listaDeNomes.length; i++){
        sorteados.innerHTML = sorteados.innerHTMLlistaDeNomes[i] + '-->' + listaDeNomes[i + 1] + '<br>'

    }
}

function reiniciar(){
    
}

//Outras Funções

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}