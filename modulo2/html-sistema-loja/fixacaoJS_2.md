/*Enunciado
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.

Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.*/

``` JavaScript 


function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let valorTotal
  if(quantidade >= 12){
    valorTotal = quantidade * 1.00
  }else{
    valorTotal = quantidade * 1.3
  }
  return valorTotal
  
 
  ```