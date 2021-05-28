import React from 'react'
import styled from 'styled-components'

const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export class ListaUsuarios extends React.Component {
    render() {
        return (
            <ContainerLista>
                <h2>Lista Usuarios</h2>
                {this.props.listaDeUsuarios}
            </ContainerLista>
        )
    }
}