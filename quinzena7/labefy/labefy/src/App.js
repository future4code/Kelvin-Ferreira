import React from 'react'
import axios from 'axios'
import { CriacaoPlaylist } from './components/CriacaoPlaylist'
import { ListaPlaylists } from './components/ListaDePlaylists'
import { PlaylistPorNome } from './components/PlaylistPorNome'
import { ListaDeFaixas } from './components/ListaDeFaixas'

class App extends React.Component {
  state = {
    inputNome: "",
    listaDePlaylists: [],
    detalhesDaPlaylist: []
  }

  controleInputNome = (e) => {
    this.setState({ inputNome: e.target.value })
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
      
      this.setState({ detalhesDaPlaylist: resposta.data.result.tracks })
    } catch {

    }
  }

  render() {
    const detalhes = this.state.detalhesDaPlaylist.map((item) => {
      return (
        <ListaDeFaixas 
        nomeMusica={item.name}
        nomeArtista={item.artist}
        />
      )
    })

    return (
      <div className="App">
        <CriacaoPlaylist
          nomePlaylist={this.state.inputNome}
          controleInputNome={this.controleInputNome}
          criarPlaylist={this.criarPlaylist}
        />

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
        />
        {detalhes}
        
      </div>
    )
  }
}

export default App;
