//alert é uma caixa de alerta que esta dando boas vindas
alert('Boas Vindas ao jogo do número secreto');
//Para resolver a questão da alteração das sentenças usadas tanto no math quanto no prompt, iremos criar uma nova variavel
let numeroMaximo = 100;
//o let é quando se cria variaveis
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativa = 1;

//Comentario
// O WHILE significa Enquanto, sendo assim, Enquanto o chute for diferente do numero secreto, faça a pergunta.
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //Se o chute for igual ao numero secreto
    if(chute == numeroSecreto){
        //O BREAK significa o PARA do While, então caso a condição seja verdadeira, ele irá parar.
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        //estou realizando a soma da quantidade de tentativas
        tentativa++
    }
}

//Nessa sentença, ele esta simplesmente falando:
//Na variavel palavraTentativa, caso a variavel tentativa for maior que 1, então usar a palavra tentativas, caso não seja, usar a parava tentativa
let palavraTentativa = tentativa > 1 ? `tentativas`:`tentativa`;
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}`);    
    //if(tentativa > 1){
      //  alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativa} tentativas`);
    //}else{
       // alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativa} tentativa`);
  //  }