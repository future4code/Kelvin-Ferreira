// // 1)
// a) O código cria uma variável cujo valor é um input do usuário que deve ser um número, depois ele pega e transforma o input no tipo número e faz a opeação para saber qual o restante da divisão deste número por 2, e checa se o resultado é 0 ou diferente de 01, caso seja 0 ele reconhece que passou no teste,, que é quandpo o numero é par, caso seja diferente, ele marca que não passou no teste, que acontece quando o número é ímpar


// 2)
// a) Ele serve para identificar o preço da fruta que o usuário está buscando. b) A mensagem será: O preço da fruta Maçã é R$ 2,25. c) O preço da fruta Pêra é R$ 5

// // 3)
// a)A primeira linha está declarando uma varíavel cujo valor é um input de usuaário que deve ser considerado de tipo número. b) A mensagem nesse caso será "Esse número passou no teste". Caso fosse -10 não haveria mensagem, pois não é estabelecido um else. c) O console que está fora do if não haverá mensagem alguma, pois a variavel mensagem foi declarada dentro de um bloco diferente. 


// // 4)
// let idade = Number(prompt("Qual a sua idade?"))

// if (idade>=18) {
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Você não pode dirigir :(")
// }

// 5)
// let turno = prompt("Qual turno você estuda? (Manhã (M), ou Vespertino (V) ou Noturno (N))")

// if (turno === "M") {
//     console.log("Bom dia!")
// } else if (turno === "V") {
//     console.log("Boa tarde!")
// } else if (turno === "N") {
//     console.log("Boa noite!")
// } else {
//     console.log("Turno não reconhecido. Escolha entre manhã (M), ou vespertino (V) ou noturno (N)")
// }

// 6)

// let turno = prompt("Qual turno você estuda? (Manhã (M), ou Vespertino (V) ou Noturno (N))")
// let saudacao

// switch (turno) {
//     case "M":
//         saudacao = "Bom dia!"
//         break;
//     case "V":
//         saudacao = "Boa tarde!"
//         break;
//     case "N":
//         saudacao = "Boa noite!"
//         break;
//     default: 
//         saudacao = "Turno não reconhecido. Escolha entre manhã (M), ou vespertino (V) ou noturno (N)"
//         break;  
// }

// console.log(saudacao)

// 7)
// let genero = prompt("Qual gênero de filme vocês vão assistir?")
// let preco = Number(prompt("Qual é o preço do ingresso?"))

// if (genero === "Fantasia") {
// } else if (preco <= 15) {
//         console.log("Bom filme!")
// } else {
//     console.log("Esolha outro filme :(")
// }
