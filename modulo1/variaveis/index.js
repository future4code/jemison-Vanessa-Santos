//Exercícios de interpretação de código

// Exercício 1. Será  impresso 10 10 5 

/*let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)*/


// Exercício 2. Será impresso 10 10 10 

/*let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)*/

//Exercício 3 
//Alterei o p por horasTrabalhoDia
//Alterei o t por recebeDia

/*let horasTrabalhoDia = prompt("Quantas horas você trabalha por dia?")
let recebeDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${recebeDia/horasTrabalhaDia} por hora`);*/

//Exercícios de escrita de código

//let nome = /*undefined*/prompt("Qual é o seu nome?");
//let idade= /*undefined*/prompt("Qual sua idade?");
//console.log(nome,idade);
// Foi impresso por não ter um nome e uma idade atribuidos ao valor da variável
//console.log(typeof nome);
//console.log(typeof idade);
/* Quando coloco pergunto ao usuário qual seu nome e idade, me aparece uma janelinha solicitando
as informações ao usuário, Quando uso o console.log aparece para mim as informações que o usuário 
inseriu.*/
//console.log("Olá", nome, "você tem", idade , "anos");


//Exercício 2

/*let lasanha = prompt("Você gosta de lasanha?");
let cinza = prompt("Você gosta de cor cinza?");
let vegetariana = prompt("você é vegetariana?");
console.log("Você gosta de lasanha?", lasanha , "Você gosta da cor cinza?", cinza , "Você é vegetariana?", vegetariana);*/


//Exercício 3


let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores,
let c = 10
a=b
b=b
a=b

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", b) // O novo valor de a é 25;
console.log("O novo valor de b é", c) // O novo valor de b é 10