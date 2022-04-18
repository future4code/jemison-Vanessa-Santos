//Exercícios de interpretação de código
//1
/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)*/

/*  a. False
    b. False
    c. True
    d. Boolean
*/

//2
/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/
// O código esta juntando os 2 números digitados pelo usuário
 
//3
/*let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))*/

/*let soma
 soma = primeiroNumero + segundoNumero

console.log(soma)*/
// Para somar precisamos tranformas a string em number 

//Exercícios de escrita de código
//1
/*let idade = Number(prompt("Qual sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))
resultado = idade > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
resultado = idadeAmigo - idade
console.log(resultado)*/

//2
/*let numeroPar = Number(prompt("Insira um número par"))
divisao = numeroPar % 2
console.log("O resto é?" , divisao)

//3
let suaIdade = Number(prompt("Qual a sua idade?"))
mesesAno = (12)
diasAno= (365)
horasAno= (8760)

console.log(suaIdade * mesesAno)
console.log (suaIdade * diasAno)
console.log(suaIdade * horasAno)*/

//4
let primeiroNumero = Number(prompt("Digite um número"))
let segundoNumero = Number(prompt("Digite outro número"))

const comparacao = primeiroNumero > segundoNumero
console.log("O primeiro numero é maior que segundo?" , comparacao)

const comparacao1 = primeiroNumero === segundoNumero
console.log("O primeiro numero é igual ao segundo?", comparacao1)

const resultado= primeiroNumero % segundoNumero
const comparacao2 = resultado === 0
console.log("O primeiro numero é divisível pelo segundo?" , comparacao2)

const resultado1 =segundoNumero % primeiroNumero
const comparacao3=  resultado1 === 0
console.log("O segundo numero é divisível pelo primeiro?" , comparacao3)