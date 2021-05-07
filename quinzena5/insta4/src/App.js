import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

let dadosPost = [{
  nomeUsuario: 'Paulinha',
  fotoUsuario: 'https://picsum.photos/50/50',
  fotoPost: 'https://picsum.photos/200/150'
},
{
  nomeUsuario: 'Kanye West',
  fotoUsuario: 'https://picsum.photos/50/70',
  fotoPost: 'https://picsum.photos/200/170'
},
{
  nomeUsuario: 'Tyler, the Creator',
  fotoUsuario: 'https://picsum.photos/50/60',
  fotoPost: 'https://picsum.photos/200/160'
}
]

class App extends React.Component {
  state = {
    estadosPost: [...dadosPost],
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  }

  handleNomeUsuario = (e) => {
    this.setState({ inputNomeUsuario: e.target.value })
  }

  handleFotoUsuario = (e) => {
    this.setState({ inputFotoUsuario: e.target.value })
  }

  handleFotoPost = (e) => {
    this.setState({ inputFotoPost: e.target.value })
  }

  criarPost = () => {
    const novosDados = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    const novaPostagem = [...this.state.estadosPost, novosDados]
    this.setState({ 
      estadosPost: novaPostagem,
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: ""
    })
  }

  render() {
    const novoPost = this.state.estadosPost.map((item, index) => {
      return (
        <Post
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
      />
      )
    })

    return (
      <MainContainer>

        <input type={"text"} value={this.state.inputNomeUsuario} onChange={this.handleNomeUsuario} placeholder={"Nome de Usuário"} />
        <input type={"text"} value={this.state.inputFotoUsuario} onChange={this.handleFotoUsuario} placeholder={"Foto de Perfil"} />
        <input type={"text"} value={this.state.inputFotoPost} onChange={this.handleFotoPost} placeholder={"Foto do Post"} />
        <button onClick={this.criarPost}>Criar Novo Post</button>

        {novoPost}
  
      </MainContainer>
    );
  }
}

export default App;
