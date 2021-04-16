const botao = document.getElementById(`botao-criar`)


function adicionarTarefa() {
    const inputTarefa = document.getElementById(`tarefa`)
    const listaDomingo = document.getElementById(`dias-semana`)
    const listaDoDia = document.getElementById(listaDomingo.value)

    listaDoDia.innerHTML += `<p>${inputTarefa.value}</p>`

    inputTarefa.value = "" 
}
 
