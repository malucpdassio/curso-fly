let valorTotalGeral = 0;
let listaProduto = document.getElementById('lista-produtos');
listaProduto.innerHTML = "";

function adicionar(){
    //Definir o produto,Quantidade, Valor
    let produto = document.getElementById('produto').value;
    // o split serve para separar de acordo com um simbolo, uma sentença so value
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]
    let qnt = document.getElementById('quantidade');

    //Realização do calculo
    let subTotal = 0;
    subTotal = qnt.value * valorUnitario;

    //Adicionar ao Carrinho
    
    listaProduto.innerHTML = listaProduto.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qnt.value}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
  </section>`;

  valorTotalGeral = valorTotalGeral + subTotal
  let valorTotal = document.getElementById('valor-total');
  valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotalGeral}</span>`

    //Teste de Funcionamento (Debug)
    //alert(nomeProduto);
    //alert(valorUnitario);
    //alert(qnt.value);
   // alert(subTotal)
    

    

}

function limpar(){
  listaProduto.innerHTML = "";
  valorTotalGeral = 0;
  let valorTotal = document.getElementById('valor-total');
  valorTotal.innerHTML = "R$0";
   
}

