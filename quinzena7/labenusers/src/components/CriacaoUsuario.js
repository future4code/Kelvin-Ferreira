import React from 'react'
import styled from 'styled-components'

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export class CriacaoUsuario extends React.Component {
    render() {
        return (
            <ContainerInputs>
                <h2>Criar Usuário</h2>
                <div>
                    <input type='text' value={this.props.nome} onChange={this.props.onChangeNome} placeholder='Nome' />
                    <input type='text' value={this.props.email} onChange={this.props.onChangeEmail} placeholder='Email' />
                    <button onClick={this.props.criarUsuario}>Criar</button>
                </div>
            </ContainerInputs>
        )
    }
}