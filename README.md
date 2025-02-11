# INTRODUÇÃO CURSO MULHERES IN-TECH #
Dentro desse repositorio será trabalhado as atividades referente aos Cursos de Front-end dado pela Fly, para as alunas participantes.

O Mulheres In-Tech: Norte e Nordeste é um curso oferecido pela organização Fly, com parceria da Alura e Sepro, que oferece um curso profissionalizante com certificação para todas as mulheres do Norte e Nordeste que desejam entrar na área da programação.

Dentro desse curso, teremos aulas voltadas a Programação Front-End, com os cursos oferecidos pela Alura, uma das Maiores escolas de Programação Online no brasil, Mercado area Tech, tendo uma visão ampla do mercado de trabalho na area da tecnologia para as mulheres que desejam entrar, e Socioemocional, para aprender a lidar com situações do dia a dia dentro das empresas.

# FINALIZANDO O CURSO 02-LOGICA-DE-PROGRAMACAO #
    
Curso referente a logica de programação com uso do Javascript e focando nas questões das funções e das Listas. 
    
**O que é uma Função?**

Uma função, nada mais é que um padrão imposto para realização de alguma ação dentro do site. Ou seja, caso eu queira criar um botão de 'Enviar', quando possuir algum formulario, irei criar uma <code>function</code> (função) para enviar aqueles dados informados para algum lugar.
Dentro dessa função, posso colocar para onde quero enviar, se quando eu abertar enviar, irá aparecer algo para mim, alguma pagina ou algo do tipo.

Foi explicado que, dentro das funções, podemos colocar variaveis, mas elas possuiram nomes diferentes, no qual entraremos no conceito de Variavel **Global** e Variavel **Local**.

 **Variavel Global**: São aquelas que podem ser encontradas em qualquer parte do code, pois são usaveis no codigo inteiro;

 **Variavel Local**: Já as Locais, só podem ser utilizadas em uma parte do Codigo. Ou seja, caso seja criada uma variavel em uma função, ela só poderá ser usada dentro da sua função de criação.

**O que é Array?**

O Array foi um dos conceito trabalhado dentro do curso de maneira básica.
Sua função é armazenar dados em forma de lista, onde podemos realizar a manipulação dela durante o codigo. Elas são criadas semelhantes a variaveis, mas sempre devem ser acompanhadas por cochetes. A seguir teremos um exemplo de criação de uma Array:
```javascript
        let listagemDeNomes = [];
        //Aqui nos temos um ARRAY Vazio, sem elementos

        let listaDeCompras = ['Arroz', 'Feijão', 'Maça'];
        //Aqui temos um ARRAY com 3 elementos
```
Vale lembrar que os elementos do Array são indexados, ou seja, cada valor que é adicionado dentro dele, é associado a um numero, começando a listagem a partir do zero (EX.: 0 = Arroz ; 1 = Feijão ; 2 = Maça)

Podemos acessar esses elementos durante o codigo de diversas formas:

1. Atraves dos [] e seu indice;
```javascript
    listaDeCompras = [1] //Saida: Arroz
```
2. Podemos saber a quantidade de elementos atraves do length;
```javascript
    listaDeCompras.length //Saida: [3]
    listagemDeNomes.length //Saida: [] (Conjunto Vazio)
```
3.  Podemos adicionar mais um elemento na lista usando o PUSH;
```javascript
    listaDeCompras.push = ['Uva'] //Saida: Arroz, Feijão, Maça, Uva
```
4. Podemos verficar se um elemento se encontra na lista usando INCLUDE, mas para isso se faz necessario o IF;
```javascript
    listaDeCompras.include = ['Maça'] 
```
5. Podemos tirar o ultimo elemento da lista usando o POP.
```javascript
    listaDeCompras.pop //Saida: Arroz, Feijão, Maça
```

# FINALIZANDO O CURSO 03-LOGICA-DE-PROGRAMACAO #
Dentro desse curso, foi possivel realizar 5 projetos que nos desafia a realizar a logica em si dentro de cada projeto.
Desse modo, foi possivel treinar o nosso pensamento logico com cada um desses projetos, lembrando que é interessante voltar em todos e estudar mais afundo realizando anotações e um paso a paso de como começar a realizar a logica de um projeto (Porem essa é uma questão pessoal de cada um)