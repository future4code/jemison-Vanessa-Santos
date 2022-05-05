//Exercícios de interpretação de código
//1 
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })*/
  // Está imprimindo um array com o nome e apelido, mas em formato de novos array devido o chamamneto estar dentro da função

  // 2 
  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)*/
  //  Um array de nomes

  // 3 
  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)*/
  // Está retornando os nome e aprelidos difieretes de Chijo


  // --------- Exercícios de escrita de código -------------

  // 1  Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
  //realize as operações pedidas nos itens abaixo utilizando as funções de array
   //map e filter:
   const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 //a) Crie um novo array que contenha apenas o nome dos doguinhos
 let nomePets = pets.map((pet) => {
    return pet.nome
})
console.log(nomePets)

//b) Crie um novo array apenas com os cachorros salsicha
let cachorroSalsicha = pets.filter((pet) => {
    return pet.raca === "Salsicha"
})
console.log(cachorroSalsicha)
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
//A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
let cachorroPoodle = pets.filter((pet) => {
    return pet.raca === "Poodle"
})
 let mensagem = cachorroPoodle.map((pet) => {
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
 })
 console.log(mensagem)

 //Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções
 // de array map e filter:
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a) Crie um novo array que contenha apenas o nome de cada item
 let nomeProdutos = produtos.map((produto) =>{
    return produto.nome
 })
 console.log(nomeProdutos)
 // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
 let produtosComdesconto = produtos.map((produto, index, array) => {
    let precoOriginal = produto.preco
    let valorComdesconto = precoOriginal*0.05
    precoOriginal = precoOriginal*0.95
    return produto.preco - valorComdesconto

})

let listaDeNomes = produtos.map((produto) => {
    return produto.nome
})

let novaLista = []
function nomeEPreco(produto1, produto2){
   for(let i = 0; i < produto1.length; i++){
        let novoObjeto = {
             nome: produto1[i],
             preco: produto2[i]    
        }
        novaLista.push(novoObjeto)
   }
   console.log(novaLista)
}

nomeEPreco(listaDeNomes, produtosComdesconto)
//Crie um novo array que contenha apenas os objetos da categoria Bebidas
let bebidas = produtos.filter((produto) =>{
    return produto.categoria === "Bebidas"
})
console.log(bebidas)
//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
let nomes = produtos.filter((produto) =>{
    if(
        produto.nome.includes("Ypê")){
            return produto.nome
        }
})
console.log(nomes)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve 
//conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
let novaMenssagem = nomes.map((produto) =>{
    return `Compre ${produto.nome} por ${produto.preco} .`
})
console.log(novaMenssagem)