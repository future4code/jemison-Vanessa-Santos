//Exercícios de interpretação de código
// Exercício 1
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/
//A; ele testa se o número é divisivel por 2
//B; Para números que são divisiveis po 2
//C; Para números que não são divisiveis po 2

//Execício 2
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   // break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/
//a; Para dizer ao usúario o preço das furtas
//b; Se escrever da forma correta mostrará que o valor da maçã é R$2.25, já se ecrever maçã da forma erada o valor mostrado sera de R$ 5.00
//c; Se removermos o Break indicado o valor da Pêra será de R$ 5.00 

//Exercício 3
/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/
// a; A primeira linha está pedindo para o usuário digitar um numero
//b; Considerando que o usúario digitou o número 10 a mensagem no console é, Esse número passou no teste. Se o número for -10 irá aparecer um erro no terminal
//c; Sim, um erro dizendo que a mensagen não está definida, e de fato no código a variavel mesagen não esta recebdo nem um valor  do else para retornar algo no console.

//Exercícios de escrita de código

//Exercício 1

/*let idade= Number(prompt("Qual a sua idade?"))

function maiorIdade (idade){
    if(idade >= 18){
        console.log("Você pode dirigir")
    }
    else{
        console.log("Você não pode dirigir.")
    }
}
maiorIdade(idade)
*/
// Exercício 2

/*
let turno = prompt("Digite qual turno você estuda M (Matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()
if (turno === "m"){
    console.log("Bom dia!")
}
else if(turno === "v"){
    console.log("Boa tarde!")
}
else {
    console.log("Boa noite!")
}
*/
//Exercício 3

let turnoEstuda = prompt("Digite qual turno você estuda M (Matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()

switch (turnoEstuda){
    case "m" :
        console.log("Bom Dia!!")
        break
    case "v":
        console.log("Boa Tarde!!")
        break
    case "n" :
        console.log("Boa Noite!!")
        break
    default:
        console.log("Insira o nome correto e tente novamente.")
}


//Exercício 4

let filme= prompt("Qual o genêro de filme vai assistir?").toLowerCase()
let valorIngresso= Number(prompt("Digite o valor do ingresso!"))

function vaiAssistir(filme , valorIngresso){
    if(filme === "fantasia" && valorIngresso <= 15){
        console.log("Bom Filme!")
    }
    else{
        console.log("Escolha outro Filme :(")
    }
}
vaiAssistir( filme, valorIngresso)