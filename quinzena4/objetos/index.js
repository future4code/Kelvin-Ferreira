
function captarPostagem() {
    const tituloPostagem = document.getElementById("titulo-post")
    const autorPostagem = document.getElementById("autor-post")
    const conteudoPostagem = document.getElementById("conteudo-post")
    const array = []
    const postagem = {
        titulo: tituloPostagem.value,
        autor: autorPostagem.value,
        conteudo: conteudoPostagem.value
    }

    array.push(postagem)

    tituloPostagem.value = ""
    autorPostagem.value = ""
    conteudoPostagem.value = ""

    console.log(array)

    const secaoPosts = document.getElementById("container-de-posts")
    secaoPosts.innerHTML += `<div class="posts"><h2>${postagem.titulo}</h2><h3>${postagem.autor}</h3><p>${postagem.conteudo}`
}
