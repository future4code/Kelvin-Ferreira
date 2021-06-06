import React from 'react'
import axios from 'axios'
import { CriacaoUsuario } from './components/CriacaoUsuario'
import { ListaUsuarios } from './components/ListaUsuarios'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Lista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    pagina: 1,
    valorInputNome: "",
    valorInputEmail: "",
    listaUsuarios: []
  }

  onChangeNome = (e) => {
    this.setState({ valorInputNome: e.target.value })
  }

  onChangeEmail = (e) => {
    this.setState({ valorInputEmail: e.target.value })
  }

  trocarPaginaAtual = () => {
    if (this.state.pagina === 1) {
      this.setState({ pagina: this.state.pagina + 1 })
    } else {
      this.setState({ pagina: this.state.pagina - 1 })
    }

    this.pegarListaDeUsuarios()
  }

  criarUsuario = async () => {
    const body = {
      name: this.state.valorInputNome,
      email: this.state.valorInputEmail
    };

    try {
      await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        ,
        body,
        {
          headers: {
            Authorization: "kelvin-ferreira-munoz"
          }
        }
      )
      alert("O usuário foi criado com sucesso!")
      this.setState({
        valorInputNome: "",
        valorInputEmail: ""
      })
    } catch {
      alert("Erro! Confirme se os dados inseridos estão corretos.")
    }

    // axios.post(
    //   "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    //   ,
    //   body,
    //   {
    //     headers: {
    //       Authorization: "kelvin-ferreira-munoz"
    //     }
    //   }
    // )
    //   .then(() => {
    //     alert("O usuário foi criado com sucesso!")
    //     this.setState({
    //       valorInputNome: "",
    //       valorInputEmail: ""
    //     })
    //   })
    //   .catch(() => {
    //     alert("Erro! Confirme se os dados inseridos estão corretos.")
    //   })
  }

  pegarListaDeUsuarios = async () => {
    try {
      const resposta = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "kelvin-ferreira-munoz"
          }
        }
      )
      this.setState({ listaUsuarios: resposta.data })
    } catch {
      alert("Algo deu errado :(")
    }
    // axios.get(
    //   "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    //   {
    //     headers: {
    //       Authorization: "kelvin-ferreira-munoz"
    //     }
    //   }
    // )
    //   .then((resposta) => {
    //     this.setState({ listaUsuarios: resposta.data })
    //   })
    //   .catch(() => {
    //     alert("Algo deu errado :(")
    //   })
  }

  deletarUsuario = async (idUsuario) => {
    const id = idUsuario
    if (window.confirm("Deseja mesmo deletar o usuário?")) {
      try {
        await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "kelvin-ferreira-munoz"
            }
          }
        )
        this.pegarListaDeUsuarios()
        alert("Usuário deletado com sucesso")
      } catch {
        alert("Algo deu errado :(")
      }
    }
    // axios.delete(
    //   `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    //   {
    //     headers: {
    //       Authorization: "kelvin-ferreira-munoz"
    //     }
    //   }
    // )
    //   .then(() => {
    //     if (window.confirm("Deseja mesmo deletar o usuário?")) {
    //       this.pegarListaDeUsuarios()
    //       alert("Usuário deletado com sucesso")
    //     }
    //   })
    //   .catch(() => {
    //     alert("Algo deu errado :(")
    //   })
  }

  render() {
    let paginaAtual
    switch (this.state.pagina) {
      case 1:
        paginaAtual = <CriacaoUsuario
          nome={this.state.valorInputNome}
          email={this.state.valorInputEmail}
          onChangeNome={this.onChangeNome}
          onChangeEmail={this.onChangeEmail}
          criarUsuario={this.criarUsuario} />
        break
      case 2:
        paginaAtual = <ListaUsuarios
          listaDeUsuarios={this.state.listaUsuarios.map((usuario) => {
            return (
              <Lista key={usuario.id}>
                <p>{usuario.name}</p>
                <button onClick={() => { this.deletarUsuario(usuario.id) }}>Deletar</button>
              </Lista>
            )
          })}
        />
        break
      default:
    }

    return (
      <MainContainer>
        <h1>Labenusers</h1>
        <button onClick={this.trocarPaginaAtual}>Trocar de página</button>
        {paginaAtual}
      </MainContainer>
    );
  }
}

export default App;
