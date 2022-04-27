//Exercícios de interpretação de código
// Exercío 1
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

/*a; Será impresso, Matheus Nachtergaele, Virginia Cavendish e um obejto contendo o canal e horário*/

// Exercício 2
/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
//a; Será impresso 3 arrays iguais contendo nome, idade e raça
/*b: Realiza uma cópia de um objeto (ou array) inteiro, Feita a cópia podemos minipular ela da forma que 
quisermos*/
 
//Exercício 3
/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
//a; será impresso um false e undefined
/*b; o valor false foi impresso pois a pessoa não é backender, e o undefined foi impresso pois não existe nem 
uma informação de altura para a pessoa*/

//Exercícios de escrita de código
//1 
/*const pessoa = {
    nome : "Vanessa",
    apelidos: ["Vane", "Vaninha" , "Nessa"]
}
 console.log("Eu sou" , pessoa.nome ,  "mas você pode me chamar de" , pessoa.apelidos[0] ,"," 
 , pessoa.apelidos[1], "ou" , pessoa.apelidos[2], "!")

 const novaPessoa = {
     ...pessoa,
     novosApelidos: ["Va" , "Neca" , "Van"]
 }
 console.log(`Eu sou ${pessoa.nome} mas você pode me chamar de ${novaPessoa.novosApelidos[0]} 
 , ${novaPessoa.novosApelidos[1]} ou ${novaPessoa.novosApelidos[2]}!`)
*/
 // Exercício 2 
 /*const pessoa1 = {
     nome: "Vanessa",
     idade: 23,
     profissao: "Estudante"
 }
 const pessoa2 = {
     nome: "Kewliton",
     idade: 06,
     profissao: "Estudante"
 }
 function pessoa(primeiraPessoa , segundaPessoa){
   let arrayVazio=[primeiraPessoa.nome,primeiraPessoa.nome.length, segundaPessoa.nome,segundaPessoa.nome.length ,primeiraPessoa.idade, segundaPessoa.idade, 
    primeiraPessoa.profissao, segundaPessoa.profissao]
    
   return arrayVazio
 }
 console.log(pessoa(pessoa1, pessoa2))
*/
 //Exercício 3 
 
 const carrinho = []
 const frutas1 ={
     nome: "Morango",
     disponibilidade: true
 }
 const frutas2={
     nome: "Laranja",
     disponibilidade: true
 }
 const frutas3={
     nome:"Banana",
     disponibilidade:true
 }
 function recebeCarrinho(fruta){
     //return carrinho.push(fruta)
     
      return carrinho.push(fruta)
      //recebeCarrinho(frutas1, frutas2, frutas3)
      
 }
 recebeCarrinho(frutas1)
 recebeCarrinho(frutas2)
 recebeCarrinho(frutas3)
 console.log(carrinho)