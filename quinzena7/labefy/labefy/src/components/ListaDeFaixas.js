import React from 'react'

export class ListaDeFaixas extends React.Component {
    render() {
        return(
            <div>
                <h4>{this.props.nomeMusica}</h4>
                <p>{this.props.nomeArtista}</p>
            </div>
        )
    }
}