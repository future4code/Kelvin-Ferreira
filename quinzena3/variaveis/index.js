// 1)

let nome 
let idade 

console.log(typeof nome, typeof idade)

// // O resultado que apareceu no console foi "undefined e undefined"

nome = prompt("Qual seu nome?")
idade = prompt("Quantos anos você tem?")

console.log(nome, idade)

// // As variavés assumiram os valroes inseridos pelo usuário

console.log(typeof nome, typeof idade)

// // Ambas variáveis se tornaram strings

console.log("Olá,", nome, "você tem", idade, "anos")


// 2)

let filme = prompt("Qual seu filme favorito?")
let jogo = prompt("Qual seu jogo favorito?")
let musica = prompt("Qual sua música favorita?")
let prato = prompt("Qual seu prato favorito?")
let artista = prompt("Qual seu artista favorito?")

console.log("1. Qual seu filme favorito?")
console.log("Resposta:", filme)
console.log("2. Qual seu jogo favorito?")
console.log("Resposta:", jogo)
console.log("3. Qual sua música favorita?")
console.log("Resposta:", musica)
console.log("4. Qual seu prato favorito?")
console.log("Resposta:", prato)
console.log("5. Qual seu artista favorito?")
console.log("Resposta:", artista)

// 3)

let comidasFavoritas = ["Pizza", "Hot roll", "Sushi", "Cuscus com ovo", "Churrasco"]

// a)
console.log(comidasFavoritas)

// // b)

console.log("Essas são as minhas comidas preferidas:")
console.log("1.", comidasFavoritas[0])
console.log("2.", comidasFavoritas[1])
console.log("3.", comidasFavoritas[2])
console.log("4.", comidasFavoritas[3])
console.log("5.", comidasFavoritas[4])

// // c)

let pratoFavoritoUser= prompt("Qual seu prato favorito?")

comidasFavoritas =["Pizza", pratoFavoritoUser, "Sushi", "Cuscus com ovo", "Churrasco"]

console.log(comidasFavoritas)


// 4)

const perguntas = ["Você sabe dirigir?", "Você é habilitado?", "Você possui um veiculo?"]
const sim = true
const nao = false
let respostas = [sim, nao, nao]

console.log("1.", perguntas[0], sim)
console.log("2.", perguntas[1], nao)
console.log("3.", perguntas[2], nao)




