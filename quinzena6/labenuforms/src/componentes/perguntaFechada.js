import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
    margin-bottom: 15px;
    margin-top: 5px;
`

export class PerguntaFechada extends React.Component {

    render() {
        return (
            <>
                <label>{this.props.pergunta}</label>
                <Select value={this.props.valorSelecionado} onChange={this.props.capturarValorSelecionado}>
                    {this.props.opcoes.map(item => {
                        return <option value={item}>{item}</option>
                    })}
                </Select>
            </>
        )
    }
}