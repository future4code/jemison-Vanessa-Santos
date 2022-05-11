// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  //const array=[]
  console.log(array.length)
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(novoArray) {
  //const Novoarray=[8, 23, 16, 10]
  novoArray.reverse()
  console.log(novoArray)
  return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

 return array.sort((a,b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayVazio = array.filter(arrayVazio => (arrayVazio %2)== 0)
  return arrayVazio
} 


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayElevado = array.filter(arrayElevado => (arrayElevado %2)== 0)
  return arrayElevado * 2
}
console.log(arrayElevado)

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
  for (let i = 0; numerosPares.length < n; i++) {
      if (i % 2 == 0) {
          numerosPares.push(i);
      }
  }
  return numerosPares;
}

console.log(retornaNNumerosPares(5))


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((item) => {
     return (item.idade > 14 && item.idade < 60 && item.altura > 1.5)
   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort((a,b)=>{
    if(a.nome < b.nome){
      return -1
    }else 
    {return true}
  })
  return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}