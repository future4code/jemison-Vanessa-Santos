//Exercícios de interpretação de código
//1
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

/* a; undefined
b; null
c; 11
d; 3 
e; array(11)
f; 9*/


//2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
 /* Pede que o usuário digite uma frase. Coloca a frase em letras maiusculas. 
 Troca a letra A por I. e diz quantos caracters tem a frase*/


 //Exercícios de escrita de código
 //1
 let emailUsuario= prompt("Digite seu email!")
 let nomeUsuario = prompt("Qual o seu nome?")
 console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}!`)

 //2
 const comidasFavoritas= [ "Lasanha" , "Lanche" , "Pizza" , "Torta" , "Chocolate"]
 console.log(comidasFavoritas)
 let preferidas =("Essas são as minhas comidas preferidas!")
 console.log(comidasFavoritas[0])
 console.log(comidasFavoritas[1])
 console.log(comidasFavoritas[2])
 console.log(comidasFavoritas[3])
 console.log(comidasFavoritas[4])
 let suaComidaPreferida = prompt ("Qual a sua comida preferida?")
 console.log(suaComidaPreferida)
 comidasFavoritas.splice(1, suaComidaPreferida)
 
 //3 
 let arrayTarefa=[]
 let arrayTarefa1= prompt("Digite sua primeira tarfa")
 let arrayTarefa2= prompt("Digite sua segunda tarefa")
 let arrayTarefa3= prompt("Digite sua terceira tarefa")
 let lista= [arrayTarefa1, arrayTarefa2, arrayTarefa3]
 console.log (lista)
 let tarefaRealizada= prompt("Escolha a tarefa de 0 a 2")
 console.log(tarefaRealizada)
 lista.splice(0,1)
 console.log(lista)

