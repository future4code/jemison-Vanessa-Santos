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
  let arrayElevado = []
  let numeroPar = array.map((num)=>{
    if(num % 2 === 0){
      arrayElevado.push(num * num)
    }
  })
  return arrayElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  novoArray =[num1 , num2]
  let maiorNumero = novoArray[0]

    for(let i = 0; i < novoArray.length; i++){
        if(novoArray[i] > maiorNumero){
            maiorNumero = novoArray[i]          
        }  
      }
  
  function diferencaEntreNumeros(){
  let resultado
  if(num1<num2){
        resultado = num2-num1
  }else{
      resultado = num1-num2
  }
  return resultado
}

  function divisivel(){
  if(num2 % num1 === 0){
     maiorDivisivelPorMenor = true
  }else{
   maiorDivisivelPorMenor = false
  }
  return maiorDivisivelPorMenor
  }

  newObjeto={
  maiorNumero: maiorNumero,
  maiorDivisivelPorMenor: divisivel(),
  diferenca: diferencaEntreNumeros()
  }

  return newObjeto

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
  if(ladoA === ladoB && ladoB === ladoC){
    return "Equilátero"
  }else if(ladoA === ladoB || ladoB === ladoC || ladoC === ladoA){
    return "Isósceles"
  }else{
    return "Escaleno"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  return [array.sort((a , b)=> a - b)[array.length-2], array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
  
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   pessoaAnonima = {
     ... pessoa,
     nome: "ANÔNIMO"
   }
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((item) => {
     return (item.idade > 14 && item.idade < 60 && item.altura > 1.5)
   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoaNAutorizada = []
  pessoas.find((pessoa)=>{
    if(pessoa.idade <= "14"  || pessoa.idade > 60 || pessoa.altura < 1.5){
      pessoaNAutorizada.push(pessoa)
  }  
})
return pessoaNAutorizada
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