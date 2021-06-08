import React from 'react'
import styled from 'styled-components'

const Lista = styled.div`
    display: flex;
    justify-content: space-between;
    height: 78vh;
    font-size: xx-large;
`

const Detalhes = styled.div`
    background-image: linear-gradient(to bottom right, #04c5c6, #132235);
    height: 100%;
    width: 60%;
    overflow: auto;
    transition: 1.5s;
    opacity: 0.8;
    font-size: x-large;
    text-align: inherit;

    &:hover {
        opacity: 1;
        background-image: linear-gradient(to top right, #132235, #04c5c6);
    }
`
const ListaDePlaylists = styled.div`
    background-image: linear-gradient(to top, black, #132235);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    height: 100%;
    width: 40%;
    padding: 0 2%;
    text-align: center;
`

export class ListaPlaylists extends React.Component {
    render() {
        return (
            <Lista>
                <ListaDePlaylists>
                    <h2><strong>Playlists</strong></h2>
                    {this.props.listaDePlaylists}
                </ListaDePlaylists>
                <Detalhes>
                    {this.props.addNovaFaixa}
                    {this.props.listaFaixas}
                </Detalhes>
            </Lista>
        )
    }
}