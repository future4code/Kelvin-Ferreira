import React from 'react'
import styled from 'styled-components'

const Playlist = styled.section`
    width: 100%;
`
const Botao = styled.button`
    background-color: #04c5c6;
    border: none;
    padding: 1vh 2vw;
    border-radius: 8px;
    color: white;
    font-size: large;
`
export class PlaylistPorNome extends React.Component {
    render() {
        return (
            <Playlist>
                <div>
                    <p>{this.props.nomePlaylist}</p>
                    <Botao onClick={this.props.deletarPlaylist}>Deletar</Botao>
                    <Botao onClick={this.props.pegarDetalhes}>Abrir Playlist</Botao>
                </div>
                <hr />
                <div>
                    {this.props.addFaixa}
                </div>
            </Playlist>
        )
    }
}