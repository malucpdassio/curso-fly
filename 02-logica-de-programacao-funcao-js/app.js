//Aqui você criou uma variavel para modificar o texto que está no HTML
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'JODO DO NUÚMERO SECRETO';

//document.querySelector será responsavel por selecionar o elemento
//innerHTML será responsavel por mudar o texto

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// 'let campo = document.querySelector (tag) mais campo.innerHTML = texto' é a forma simplificada das sentenças a cima, pois vai por tudo em uma linha e depois criar uma função para determinar as tags
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

//forma de se comunicar atraves da função
exibirTextoNaTela('h1', 'Jogue o jogo do número Secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')


// função será um padrão de ações que o sistema fará, entretanto a função, assim como a variavel, precisa ser descritiva;
//A função será a AÇÃO que o site fará
//a criação de função vai ser da seguinte forma:
function verificarChute(){
    let chute = document.querySelector('input').value;
    //esse let chute é uma variavel que terá a resposta do usuario
    //input é a forma de interação com usuario
    console.log(chute == numeroSecreto);
    //no console, solicitamos a comparação do chute e do NS
    //tipo goleano é quando o resultado de uma comparação dar true ou false
}

// o return serve para retornar o numero determinado pelo math.random()
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}