```
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 // Escreva seu código aqui
   
const nomeAnimais = []

 for(let i = 0; i < animais.length; i++){
   let nome = animais[i].nome
   nomeAnimais.push(nome)
 }
 
 return nomeAnimais
 }



```