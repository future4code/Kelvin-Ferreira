import React from 'react'
import styled from 'styled-components'

const Inputs = styled.input`
    margin-bottom: 15px;
    margin-top: 5px;
`

export class PerguntasAbertas extends React.Component {
    render() {
        return (
            <>
            <label>{this.props.perguntas}</label>
            <Inputs type={'text'} placeholder={this.props.placeHolder} />
            </>
        )
    }
}