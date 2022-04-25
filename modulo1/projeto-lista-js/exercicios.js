// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number (prompt("Digite a altura do retângulo!"))
  const largura = Number (prompt("Digite a largura do retângulo!"))
  const area =  altura * largura
console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual!"))
  let anoNascimento = Number(prompt("Digite seu ano de nascimento!"))
  let idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return IMC= peso / (altura * altura)
  console.log(IMC)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual o seu nome?")
  let idade = Number (prompt("Quantos anos você tem?"))
  let email = prompt("Digite seu e-mail!")
  let frase=`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(frase)
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let arrayCores=[]
  let arrayCor1= prompt("Digite uma cor favorita")
  let arrayCor2= prompt("Digite outra cor favorita")
  let arrayCor3= prompt("Digite mais uma cor favorita")
  let lista=[arrayCor1, arrayCor2, arrayCor3]
  console.log(lista)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let frase= prompt("Digite seu texto")
return string.toUpperCase()
console.log(string)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1 >= string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
  return (array.shift())

 
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  return (array.pop())
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let encontrandoUltimoIndice= array.length -1
  let primeiroIndice= array.shift()
  let ultimoIndice= array.pop()
  array.splice(0,0, ultimoIndice)
  array.splice(encontrandoUltimoIndice, 0 , primeiroIndice)

 return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let convert = string1.toUpperCase()
  let convert1 = string2.toUpperCase()
  let resultados = convert === convert1
   console.log(resultados)
  return resultados
  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual= prompt("Em que ano estamos?")
  const anoNascimento= prompt("Qual seu ano de nascimento?")
  const anoEmissaoRg= prompt("Quando seu RG foi emitido?")
  const idade= anoAtual - anoNascimento
  const menos20= anoAtual- anoEmissaoRg<=5
  const entre20e50= anoAtual - anoEmissaoRg <=10
  const acimade50= anoAtual - anoEmissaoRg <= 15
  console.log()

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let tem18Anos= prompt("Você tem mais de 18 anos?")
  let escolaridade = prompt("Você posui ensino médio completo?")
  let disponibilidade= prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  let estudante = tem18Anos === escolaridade === disponibilidade
  return estudante
  }