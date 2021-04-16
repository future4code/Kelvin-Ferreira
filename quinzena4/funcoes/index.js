// 1)
// a) No primeiro caso o úmer 10 será impresso no console. Já no segundo caso é o número 50 que será impresso no console
// b) Não aparecerá nada, a função será invocada, mas não há nenhuma ação estabelecida.

// 2) 
// a) No console serão impressos os nomes Darvas e Caio, pois se referem às posições 0, 1 (as únicas que são atendem a condição de i < 2) 
// do array em questão
// b) No console serão impressos ambos os nomes Amanda e Caio, nesse caso

// 3) A função identifica os números pares (que atendem a condição x % 2 === 0) dentro da variável "array", 
// múltiplica esses valores entre si e insere o resultado da multiplicação no arrayFinal, e por fim ele retorna o arrayFinal 

// 4)
// a)
// function dadosPessoais() {
//   console.log("Eu sou Kelvin, tenho 19 anos, moro em São Paulo e sou estudante.")
// }

// dadosPessoais()

// // b)
// function dadosDeOutraPessoa(nome, idade, cidade, estudante) {
//   if (estudante === true) {
//     estudante = "sou estudante"
//   } else {
//     estudante = "não sou estudante"
//   }
//   console.log("Eu sou", nome, "tenho", idade, "anos, moro em", cidade, "e", estudante,".")
// }

// dadosDeOutraPessoa("50cent", 45, "Nova York", true)

// 5)
// a)
// const somaDeNumeros = (numero1, numero2) => {
//   return numero1 + numero2
// }

// let resultado = somaDeNumeros(2, 2)

// console.log(resultado)

// // b)
// const comparacaoDeNumeros = (primeiroNumero, segundoNumero) => {
//   return primeiroNumero >= segundoNumero
// }

// resultadoComparacao = comparacaoDeNumeros(1, 2)
// resultadoComparacao2 = comparacaoDeNumeros(2, 2)
// resultadoComparacao3 = comparacaoDeNumeros(3, 2)

// console.log(resultadoComparacao, resultadoComparacao2, resultadoComparacao3)

// // c)
// const imprimirMensagem = (mensagem) => {
//   console.log(mensagem)
// }

// for (let i = 1; i <= 10; i++) {
//   imprimirMensagem("Mensagem escrita")
// }

// 6)
// a) 
// const comprimentoDoArray = (arrayNumerico) => {
//   return arrayNumerico.length
// }

// // b)
// const numeroPar = (numero) => {
//   return numero % 2 === 0
// }

// // c)
// let numerosPares = []
// const identificarNumerosPares = (arrayNumeros) => {
//   for (let numerosDoArray of arrayNumeros) {
//     if (numerosDoArray % 2 === 0) {
//       numerosPares.push(numerosDoArray)
//     }
//   }
//   console.log(numerosPares.length)
// }

// identificarNumerosPares([1, 2, 3 ,4 ,5 , 6, 7, 8])

// d) 
let numerosPares2 = []
const identificarNumerosPares2 = (arrayNumeros) => {
  for (let indice = 0; indice < arrayNumeros.length; indice++) {
    if (numeroPar(arrayNumeros[indice])) {
      numerosPares2.push(arrayNumeros[indice])
    }
    
  }
  console.log(numerosPares2.length)
}

identificarNumerosPares2([1, 2, 3 ,4 ,5 , 6, 7, 8])