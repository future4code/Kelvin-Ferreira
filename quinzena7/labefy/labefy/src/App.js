import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Global } from './globalStyle'
import { CriacaoPlaylist } from './components/CriacaoPlaylist'
import { ListaPlaylists } from './components/ListaDePlaylists'
import { PlaylistPorNome } from './components/PlaylistPorNome'
import { ListaDeFaixas } from './components/ListaDeFaixas'
import { AddNovaFaixa } from './components/AddNovaFaixa'
import labefyLogo from './img/labefyLogo.png'

const MainContainer = styled.section`
  background-color: #132235;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`
const Cabecalho = styled.header`
  background-image: linear-gradient(to bottom right, #132235, black);
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: x-large;
  height: 24vh;
  margin: 0 auto;
`
const Logo = styled.img`
  height: 100%;
  width: 196px;
  margin-bottom: 0;
`

const BotaoTrocaPagina = styled.button`
  background-color: #04c5c6;
  border: none;
  padding: 16px;
  border-radius: 8px;
`

const ContainerCentro = styled.main`
  height: 78vh;
  width: 100vw;
  margin: 0 auto;
`

const Rodape = styled.footer`
  height: 36vh;
  width: 80vw;
  display: flex;
  justify-content: space-evenly;
  background-image: linear-gradient(to bottom right, black, #132235);
  margin: 0 auto;
  padding: 10vh 10vw 10vh 10vw;
`
const UltimaLinha = styled.p`
  align-self: flex-end;
`

class App extends React.Component {
  state = {
    pagina: 1,
    inputNome: "",
    inputMusica: "",
    inputArtista: "",
    inputLink: "",
    listaDePlaylists: [],
    detalhesDaPlaylist: [],
    secao: 0,
    playlistId: ""
  }

  controleInputNome = (e) => {
    this.setState({ inputNome: e.target.value })
  }

  controleInputMusica = (e) => {
    this.setState({ inputMusica: e.target.value })
  }

  controleInputArtista = (e) => {
    this.setState({ inputArtista: e.target.value })
  }

  controleInputLink = (e) => {
    this.setState({ inputLink: e.target.value })
  }

  criarPlaylist = async () => {
    const body = {
      name: this.state.inputNome
    }

    try {
      await axios.post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        body,
        {
          headers: {
            Authorization: "kelvin-ferreira-munoz"
          }
        }
      )
      this.setState({ inputNome: "" })
      this.pegarTodasPlaylists()
    } catch {
      alert("Erro! As playlists não podem conter nomes iguais!")
    }
  }

  pegarTodasPlaylists = async () => {
    try {
      const resposta = await axios.get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        {
          headers: {
            Authorization: "kelvin-ferreira-munoz"
          }
        }
      )
      this.setState({ listaDePlaylists: resposta.data.result.list })
    } catch {
      alert("Falha em encontrar as playlists.")
    }
  }

  componentDidMount() {
    this.pegarTodasPlaylists()
  }

  deletarPlaylist = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

    try {
      axios.delete(
        url,
        {
          headers: {
            Authorization: "kelvin-ferreira-munoz"
          }
        }
      )
      alert("Playlist deletada com sucesso! Atualize a página para ver a mudança.")
      this.pegarTodasPlaylists()
    } catch {
      alert("Erro ao deletar")
    }
  }


  pegarDetalhesDaPlaylist = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    try {
      const resposta = await axios.get(
        url,
        {
          headers: {
            Authorization: "kelvin-ferreira-munoz"
          }
        }
      )

      this.setState({
        detalhesDaPlaylist: resposta.data.result.tracks,
        secao: 1,
        playlistId: id
      })
    } catch (err) {
      console.log(err)
    }
  }

  addNovaFaixa = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    const body = {
      name: this.state.inputMusica,
      artist: this.state.inputArtista,
      url: this.state.inputLink
    }

    axios.post(
      url,
      body,
      {
        headers: {
          Authorization: "kelvin-ferreira-munoz"
        }
      }
    )
      .then(() => {
        this.setState({
          inputMusica: "",
          inputArtista: "",
          inputLink: ""
        })
        alert("Faixa adicionado com sucesso! Atualize a página para ver a mudança.")
      })
      .catch(() => {
        alert("Algo deu errado")
      })
    this.pegarDetalhesDaPlaylist()
  }

  trocarPagina = () => {
    if (this.state.pagina === 1) {
      this.setState({ pagina: this.state.pagina + 1 })
    } else {
      this.setState({
        pagina: this.state.pagina - 1,
        secao: 0
      })
    }
  }

  render() {
    const detalhes = this.state.detalhesDaPlaylist.map((item) => {
      return (
        <ListaDeFaixas
          nomeMusica={item.name}
          nomeArtista={item.artist}
          link={item.url}
        />
      )
    })

    let paginaAtual

    switch (this.state.pagina) {
      default:
        paginaAtual =
          <CriacaoPlaylist
            nomePlaylist={this.state.inputNome}
            controleInputNome={this.controleInputNome}
            criarPlaylist={this.criarPlaylist}
          />
        break
      case 2:
        paginaAtual =
          <ListaPlaylists
            listaDePlaylists={this.state.listaDePlaylists.map((playlist) => {
              return (
                <PlaylistPorNome
                  nomePlaylist={playlist.name}
                  deletarPlaylist={() => { this.deletarPlaylist(playlist.id) }}
                  pegarDetalhes={() => { this.pegarDetalhesDaPlaylist(playlist.id) }}
                />
              )
            })}
            addNovaFaixa={this.state.secao ?
              <AddNovaFaixa
                musica={this.state.inputMusica}
                artista={this.state.inputArtista}
                link={this.state.inputLink}
                controleInputMusica={this.controleInputMusica}
                controleInputArtista={this.controleInputArtista}
                controleInputLink={this.controleInputLink}
                addNovaFaixa={() => { this.addNovaFaixa(this.state.playlistId) }}
              /> : null}
            listaFaixas={this.state.secao ? detalhes : null}
          />
        break
    }

    return (

      <MainContainer>
        <Global />
        <Cabecalho>
          <Logo src={labefyLogo} />
          <BotaoTrocaPagina onClick={this.trocarPagina}>{this.state.pagina === 1 ? "Ir para Playlists" : 'Ir para Criação de Playlists'}</BotaoTrocaPagina>
        </Cabecalho>


        <ContainerCentro>
          {paginaAtual}
        </ContainerCentro>

        <Rodape>
          <div>
            <h3>Empresa</h3>
            <p>Sobre</p>
            <p>Trabalhe conosco</p>
            <p>Novidades</p>
          </div>
          <div>
            <h3>Recursos</h3>
            <p>Crie Sua Playlist</p>
            <p>Playlists</p>
          </div>
          <div>
            <h3>Suporte</h3>
            <p>Canais de atendimento</p>
            <p>Tutorial para criar playlist</p>
            <p>Tutorial adicionar faixas na playlist</p>
          </div>          
          <UltimaLinha>@2021 Labefy</UltimaLinha>
        </Rodape>

      </MainContainer>
    )
  }
}

export default App;
