
```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let aparece = 0;
  for (const numero of arrayDeNumeros){
    if (numero === numeroEscolhido)
    {
      aparece++;
    }
  }
  if (aparece === 0)
  {
    return ("Número não encontrado")
  }
  else{
    return (`O número ${numeroEscolhido} aparece ${aparece}x`)
 } 
}
```
