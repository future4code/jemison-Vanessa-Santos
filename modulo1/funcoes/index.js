//Exercícios de interpretação de código
//Exercício 1
/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a
//Será impresso o resultado da multiplicação entre 5*2=10
//e o resultado da multiplicaçao entre 10*5=50

//b
//não será impresso nada no console

//Exercício 2
/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/
//a
//Essa função retorna verdadeiro ou falso,  se o usuário digitar a palavra cenoura a resposta 
//é true se o uduário digitar qualquer outra frase ou palavra sem conter cenoura  resultado é false*/

//b
// i.   Eu gosto de cenoura = true
// ii.  CENOURA é bom pra vista = true
// iii. Cenouras crescem na terra = true

//Exercícios de escrita de código
//Exercício 1
//a
function minhasInfos(){
	console.log("Eu sou Vanessa, tenho 23 anos, moro em Salto do Itararé PR e sou Estudante Labenu")
}
//b
 const nome= prompt("Qual o seu nome?")
 const idade= Number(prompt("Qual a sua idade?"))
 const cidade= prompt("Qual sua cidade?")
 const profissao= prompt("Qual a sua profissão?")
 
 function infoUsuario(nome, idade, cidade, profissao){
	console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
 }
 infoUsuario(nome, idade, cidade, profissao)

 //Exercício 2
 //a
 function soma() {
	const numero1= Number(prompt('Digite um número'))
	const numero2= Number(prompt('Digite outro número'))
	const soma = numero1 + numero2
  
	return soma
  }
  const resultad = soma()
  console.log(resultad)

  //b
  function receDoisNumeros(){
	const numeroa= Number(prompt("Digite um número"))
	const numerob= Number(prompt("Digite ouro número"))
	const comparacao= numeroa >= numerob
	return comparacao
  }
  const resultado = receDoisNumeros()
  console.log(resultado)

  //c
function numeroPar(){
	const numero3= Number(prompt("Digite um número"))
	const total= numero3 % 2
	let par= total === 0 

	return par
}
const resultado2 = numeroPar()
console.log(resultado2)

//d
function recebeMenssagem(string){
 let menssagem = string
 return menssagem
}
recebeMenssagem("O sucesso é a soma de pequenos esforços dia após dia!")
const tamaho = recebeMenssagem("O sucesso é a soma de pequenos esforços dia após dia!")
console.log(tamaho.length)
console.log(tamaho.toUppercase)

//3
//Soma
function operacoesSoma() {
	const nu1= Number(30)
	const nu2= Number(3)
	const soma = nu1 + nu2
  
	return soma
  }
  const result = operacoesSoma()
  console.log(result)

  //Diferença
  function operacoesDiferenca() {
	const nu3= Number(30)
	const nu4= Number(3)
	const diferenca = nu3 % nu4
  
	return diferenca
  }
  const result1 = operacoesDiferenca()
  console.log(result1)
  // Multiplicação 
  function operacoesMultiplicacao() {
	const num5= Number(30)
	const num6= Number(3)
	const multiplicacao = num5 * num6
  
	return multiplicacao
  }
  const result2 = operacoesMultiplicacao()
  console.log(result2)

  // Divisão 
  function operacoesDivisao() {
	const num7= Number(30)
	const num8= Number(3)
	const divisao = num7 / num8
  
	return divisao
  }
  const result3 = operacoesDivisao()
  console.log(result3)