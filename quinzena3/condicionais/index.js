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
let genero = prompt("Qual gênero de filme vocês vão assistir?")
let preco = Number(prompt("Qual é o preço do ingresso?"))

if (genero === "Fantasia") {
} else if (preco <= 15) {
        console.log("Bom filme!")
} else {
    console.log("Esolha outro filme :(")
}
