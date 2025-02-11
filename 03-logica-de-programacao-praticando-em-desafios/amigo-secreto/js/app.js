//Criar Variaveis de nomes escolhidos e um array
let listaDeNomes = [];

//adicionar nomes dentro da array
function adicionar(){
    let nomesEnviados = document.getElementById('nome-amigo').value;
    let listaDeAmigo = document.getElementById('lista-amigos');

    if(nomesEnviados == ''){
        alert('favor escreva um nome!')
        
    }else{ 
        if(nomesEnviados.includes(nomesEnviados)){
            alert(`Nome já adicionado.`);
            return;
        } else {
            listaDeNomes.push(nomesEnviados);
            listaDeAmigo.textContent = listaDeNomes;
        }
    }

}

//sortear aleatoriamente os nomes da array

function sortear(){
    let sorteados = document.getElementById('lista-sorteio')

    if (listaDeNomes.length < 4){
        alert('Adicione no minimo 4 amigos')
    }else{
        embaralha(listaDeNomes);
        for(let i = 0; i < listaDeNomes.length; i++){

            if(i == listaDeNomes.length - 1){
                sorteados.innerHTML = sorteados.innerHTML + listaDeNomes[i] + ' --> ' + listaDeNomes[0] + '<br>';
            }else{
                sorteados.innerHTML = sorteados.innerHTML + listaDeNomes[i] + ' --> ' + listaDeNomes[i + 1] + '<br>';
            }

        }
    }
}

//limpar os campos
function reiniciar(){
    let listaDeAmigo = document.getElementById('lista-amigos');
    let sorteados = document.getElementById('lista-sorteio');

    listaDeAmigo.textContent = '';
    sorteados.innerHTML = '';
    listaDeNomes = [];
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