import React from 'react'

export class ListaPlaylists extends React.Component {
    render() {
        return (
            <div>
                <h2>Playlists</h2>
                {this.props.listaDePlaylists}
            </div>
        )
    }
}