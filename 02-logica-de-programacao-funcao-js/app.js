//Aqui você criou uma variavel para modificar o texto que está no HTML
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'JODO DO NUÚMERO SECRETO';

//document.querySelector será responsavel por selecionar o elemento
//innerHTML será responsavel por mudar o texto

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// 'let campo = document.querySelector (tag) mais campo.innerHTML = texto' é a forma simplificada das sentenças a cima, pois vai por tudo em uma linha e depois criar uma função para determinar as tags
let listaDeNumeroSoteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    } 
}

//Esse responsiveVoice.speak é um elemento usado pora dá voz ao site, seguindo essa estrutura: responsiveVoice.speak(parametro , 'linguagem, sempre em aspas simples', {rate:valocidade});

function mensagemInicial(){
//forma de se comunicar atraves da função
exibirTextoNaTela('h1', 'Jogue o jogo do número Secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}
mensagemInicial();

// função será um padrão de ações que o sistema fará, entretanto a função, assim como a variavel, precisa ser descritiva;
//A função será a AÇÃO que o site fará
//a criação de função vai ser da seguinte forma:
function verificarChute(){
    let chute = document.querySelector('input').value;
    //esse let chute é uma variavel que terá a resposta do usuario
    //input é a forma de interação com usuario
    
    //dentro dessa função, colocamos as mesmas condicionais usadas anteriormente com o alert
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'ACERTOU!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('P',mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`)
        }
        tentativas++;
        limparCampo();
    }
    //quando a função com paramentros não é tipadas, pode ser colocadas as variaveis dentro da função
    
    //no console, solicitamos a comparação do chute e do NS
    //tipo goleano é quando o resultado de uma comparação dar true ou false
}

// o return serve para retornar o numero determinado pelo math.random()
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElemento = listaDeNumeroSoteados.length;
    
    if (quantidadeDeElemento == numeroLimite){
        listaDeNumeroSoteados = [];
    }  

    if(listaDeNumeroSoteados.includes(numeroEscolhido)){
         return gerarNumeroAleatorio(); 
    } else {
        listaDeNumeroSoteados.push(numeroEscolhido);
        console.log(listaDeNumeroSoteados);
        return numeroEscolhido;
    }
}
// Essa função vai funcionar do seguinte modo: Gere a função "Gerarnumeroaleatorio()" onde teremos duas variaveis, "numeroEscolhido()" e "quantidadeDeElemento()", o numero escolhido vai ser o numero gerado aleatoriamente, enquanto a quantidade de elemento vai limitar a quantidade de numeros aleatorios gerados. Se a quantidade de elementos foi igual a 5, vou solicitar que a lista volte ao zero; Caso não seja, vou verificar se o numero se encontra na lista, se estiver, vou gerar outro numero, caso não esteja, vou colocar esse numero na lista.



//foi criado uma função o qual irá limpar a tela, quando clicarmos em Chutas
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();

    //nesse document, desabilitamos o botão de novo jogo, para quando o jogo voltar a começar
    document.getElementById('reiniciar').setAttribute('disabled',true);
}