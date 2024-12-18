let titulo = document.querySelector('h1');
titulo.innerHTML = 'Seja Bem vinda ao Desafio!';

function verificarConsole(){
    console.log('O botão foi Clicado!');
}
function verificarAlerta(){
    alert('AMO O JS !!');
}
function verificarPrompt(){
    let cidade = prompt('Qual a cidade que você mora?');
    alert(`Fui em ${cidade} e lembrei de você!`);
}

function somatorio(){
    let numero1 = parseInt(prompt('Digite o primeiro numero:'));
    let numero2 = parseInt(prompt('Digite o Segundo numero:'));
    let somatorio = numero1 + numero2;

    alert(`A soma de ${numero1} e ${numero2} é igual a ${somatorio}`);
}