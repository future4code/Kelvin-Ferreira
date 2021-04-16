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

// <script>"./nossoJogo.js"</script>

// Desafios
// 8)
const ambosResultados = [userResult, pcResult]

// aqui é feita a checagem se ambas as cartas de algum dos jogadores resulta em dois áses e o sorteio de novas cartas
for (let numero of ambosResultados) {
   if (numero === 22) {
      console.log("Resultado inválido. Maior que 21: dois Áses - Jogue novamente")
      userHand.push(comprarCarta())
      userHand.push(comprarCarta())
      pcHand.push(comprarCarta())
      pcHand.push(comprarCarta())
      let userResult2 = userHand[2].valor + userHand[3].valor
      let pcResult2 = pcHand[2].valor + pcHand[3].valor

      // aqui repete-se o start da partida
      if (confirm("Quer iniciar uma nova rodada?")) {
         console.log("Usuário - cartas: ", userHand[2].texto, userHand[3].texto, " - pontuação ", userResult2)
         console.log("Computador - cartas: ", pcHand[2].texto, pcHand[3].texto, " - pontuação ", pcResult2)
      } else {
         console.log("O jogo acabou")
      }
      // aqui se repete o calculo do vencedor
      if (userResult > pcResult) {
         console.log("O Usuário ganhou!")
      } else if (pcResult > userResult) {
         console.log("O Computador ganhou!")
      } else {
         console.log("Empate!")
      }
   }
}

// 9) 
let atualizacaoUserHand = [userHand[0].texto, userHand[1].texto]
let adicaoNovaCarta = undefined
let condicao  = true

while (condicao) 
   if (confirm("Suas cartas são " + atualizacaoUserHand + "." +
      " A carta revelada do computador é " + pcHand[0].texto + "." +
      "\n" +
      "Deseja comprar mais uma carta?")) {
      atualizacaoUserHand.push(comprarCarta().texto)
      for (index of atualizacaoUserHand) {
         adicaoNovaCarta += index + " "
      }
   } else {
      condicao = false
      }
