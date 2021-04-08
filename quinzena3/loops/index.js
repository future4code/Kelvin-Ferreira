/* 1) O código está criando um loop para determinar o valor de uma variável "valor", 
a estrutura acrescenta uma unidade à uma variaável i a cada loop, 
e o limite estabelecido para que o o loop não seja infiito é que sejam acrescentados apenas até números que sejam menores que cinco na variável i.
Ao mesmo tempo à variável "valor" é acrescentado o novo valor de i de forma que ao final o resultado que aparecerá na tela é o número 10 */

/* 2) 
a) No console serão impressos apenas os números maiores que 18 
b) Sim. Eu poderia simplesmente apagar a estrutura condicional do código exemplificado, pois desta forma eu pegaria todos os intens do array sem discriminação */

// 3)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a)
// for (let numero of arrayOriginal) {
//     console.log(numero)
// }

// b)
// for(let numero of arrayOriginal) {
//     numero /= 10
//     console.log(numero)
// }

// c)
// let arrayPares = []

// // for (let numero of arrayOriginal) {
// //     if (numero % 2 === 0) {
// //         arrayPares.push(numero)
// //     }
// // }

// // console.log(arrayPares)

// d)
// let arrayString = []
// let i = 0

// for (i = 0; i < 12; i++) {
//     arrayString.push("O elemento do index " + i + " é: " + arrayOriginal[i]) 
// }
// console.log(arrayString)

// e)
let valorMaximo = 0 
let valorMinimo = 131

for (let numero of arrayOriginal) {
    if (numero > valorMaximo) {
        valorMaximo = numero
    }
}

for (let numero of arrayOriginal) {
    if (numero < valorMinimo) {
        valorMinimo = numero
    }
}

console.log("O maior número é ", valorMaximo, "o menor é ", valorMinimo)