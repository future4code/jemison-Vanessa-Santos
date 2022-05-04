//Exercícios de interpretação de código
//1
/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)*/
// O código está somando, o valor impresso no console é 10

//2
/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}*/
//a; Será impresso no console os números maiores que 18
//b; acredito quem sim, mas não sei explicar

//3
/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
// Será impresso quatro linhas com astericos em cada uma delas, começando com um * na primeira linha, ... até chegar na quarta linha com quatro **** asteriscos
*/
//Exercícios de escrita de código
//1*
/*let totalBichinhos= Number(prompt("Quantos bichinhos você tem?"))
let animaisUsuário= 0
let animaisDeEstimacao= 0

if(animaisEstimacao ===0){
    console.log("Que pena! Você pode adotar um animal de estimação...")
}

while(animaisUsuário < animaisEstimacao){
    animaisUsuário = prompt("Digite o nome dos seus animais!!!")
    console.log([animaisUsuário])
}

//2
//a

//const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 
/*    for (let i = 0 ; i <=12 ; i++){
        console.log(arrayOriginal[i] )
    
    }
//b
    const arrayOriginal1 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 
    for (let i = 0 ; i <=12 ; i++){
        console.log(arrayOriginal1[i] / 10)
    }
*/
//c
/*
const arrayNumerosPares = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 
let par=[]
    for(let i ; 0 <=11; i++){
        let pares = (arrayNumerosPares[i] % 2)
        if (pares ===0){
            [arrayNumerosPares[i]]
        }
        console.log(par.push(arrayNumerosPares[i]))
    }
*/
//d
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 
 let vazioElemento= []
 function index (array){
for (let i = 0 ; i <= 11 ; i++){
   let= elemento = (`O elemento do índex ${i} é : ${array[i]}`)
   vazioElemento.push(elemento)
  
}
console.log(vazioElemento)
}
index(arrayOriginal)

//e
let maior = 0
let menor= 100
for (let elemnto of arrayOriginal){
    if (elemnto > maior){
        maior =elemnto 
    }
}
for (let elemento of arrayOriginal){
    if (elemento < menor){
        menor = elemento
    }
}
console.log (`O Maior número é: ${maior} e o menor número é: ${menor}`)
