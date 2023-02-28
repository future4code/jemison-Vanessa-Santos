console.log("exercicio 2")

const input = require("readline-sync")

function coresFavoritas(): void{
   const cor1:string = input.question("Insira sua primeira cor favorita?")
   const cor2:string = input.question("Insira sua segunda cor favorita?")
   const cor3:string = input.question("Insira sua terceira cor favorita?")
    
   console.log([cor1, cor2, cor3])


}
coresFavoritas()

