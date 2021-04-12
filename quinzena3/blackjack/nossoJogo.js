/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let userHand = [comprarCarta(), comprarCarta()]
let pcHand = [comprarCarta(), comprarCarta()]
let userResult = userHand[0].valor + userHand[1].valor
let pcResult = pcHand[0].valor + pcHand[1].valor

// mensagem de saudação
console.log("Bem vindo ao jogo de BlackJack!")

// jogo. Aqui é onde o usuário starta o jogo e sorteia as duas cartas de cada jogador
if (confirm("Quer iniciar uma nova rodada?")) {
   console.log("Usuário - cartas: ", userHand[0].texto, userHand[1].texto, " - pontuação ", userResult)
   console.log("Computador - cartas: ", pcHand[0].texto, pcHand[1].texto, " - pontuação ", pcResult)
} else {
   console.log("O jogo acabou")
}

// aqui é calculado o vencedor da partida
if (userResult > pcResult) {
   console.log("O Usuário ganhou!")
} else if (pcResult > userResult) {
   console.log("O Computador ganhou!")
} else {
   console.log("Empate!")
}
