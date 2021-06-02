import React from 'react'

export class CriacaoPlaylist extends React.Component {
    render() {
        return (
            <div>
                <h2>Criar Playlist</h2>
                <input type='text' placeholder='Nome da Playlist' value={this.props.nomePlaylist} onChange={this.props.controleInputNome} />
                <button onClick={this.props.criarPlaylist}>Criar</button>
            </div>
        )
    }
}