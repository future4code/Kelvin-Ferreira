//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  const arrayInvertido = []
  for(contador = 0; contador < array.length; contador++) {
      let index = array.length - 1
      arrayInvertido.push(array[index - contador])
  }
  return arrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   const paresElevadosADois = []
   for(numero of array) {
      if(numero % 2 === 0) {
         paresElevadosADois.push(Math.pow(numero, 2))
      }
   }
   return paresElevadosADois
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   const numerosPares = []
   for(numero of array) {
      if(numero % 2 === 0) {
         numerosPares.push(numero)
      }
   } 
   return numerosPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maiorNumero = 0
   for(numero of array) {
      if(numero > maiorNumero) {
         maiorNumero = numero
      }
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const respotas = [false, false, false, true, true]
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let numerosPares = []
   let contador = 0

   while(contador < n) {
      numerosPares.push(contador * 2)
      contador++
   }
   return numerosPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if(a === b && a === c && b === c) {
     return "Equilatero"
  } else if((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
     return "Isóceles"
  } else if(a !== b && a !== c && b !== c) {
     return "Escaleno"
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let numeros = [num1, num2]
   let saida = {
      maiorNumero: 0,
      maiorDivisielporMenor: undefined,
      diferenca: 0
   }

   for(numero of numeros) {
      if(numero > saida.maiorNumero) {
         saida.maiorNumero = numero
      }
   }

   if((num1 === saida.maiorNumero && num1 % num2 === 0) || (num2 === saida.maiorNumero && num2 % num1 === 0)) {
      saida.maiorDivisielporMenor = true
   } else {
      saida.maiorDivisielporMenor = false
   }

   if(num1 === saida.maiorNumero) {
      saida.diferenca = num1 - num2
   } else if(num2 === saida.maiorNumero) {
      saida.diferenca = num2 - num1
   }

   return saida
}
   
// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   const arrayMaiorEMenor = []
   let maiorNumero = 0
   let menorNumero = undefined
   let segundoMaior = 0
   let segundoMenor = undefined

   for(numero of array) {
      if(numero > maiorNumero) {
         maiorNumero = numero
      } 
   }
   for(numero of array) { 
      if(numero < maiorNumero && numero > segundoMaior) {
         segundoMaior = numero
      }
   }

   arrayMaiorEMenor.push(segundoMaior)
   
   menorNumero = maiorNumero 
   segundoMenor = maiorNumero

   for(numero of array) {
      if(numero < menorNumero) {
         menorNumero = numero
      } 
   }
   for(numero of array) {
      if(numero > menorNumero && numero < segundoMenor) {
         segundoMenor = numero
      }
   }

   arrayMaiorEMenor.push(segundoMenor)

   return arrayMaiorEMenor
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   array.sort((a, b) => {
      return a-b
   })
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filmeAstrodev = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }

   return filmeAstrodev
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filmeAstrodev = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }

   return `Venha assistir ao filme ${filmeAstrodev.nome}, de ${filmeAstrodev.ano}, 
   dirigido por ${filmeAstrodev.diretor} e estrelado por ${filmeAstrodev.atores[0]}, 
   ${filmeAstrodev.atores[1]}, ${filmeAstrodev.atores[2]} e ${filmeAstrodev.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}