import React from 'react'

export class PlaylistPorNome extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.nomePlaylist}</p>
                <button onClick={this.props.deletarPlaylist}>Deletar</button>
                <button onClick={this.props.pegarDetalhes}>Ver detalhes</button>
            </div>
        )
    }
}