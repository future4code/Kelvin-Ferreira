import React from 'react';
import styled from 'styled-components'
import {PerguntasAbertas} from '../componentes/perguntasAbertas'
import {PerguntaFechada} from '../componentes/perguntaFechada'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export class DadosGerais extends React.Component {
    render() {

        return (
            <Container>
                <h1>Dados Gerais</h1>
                <PerguntasAbertas perguntas={"1- Qual seu nome completo?"} placeHolder={"Nome Completo"} />
                <PerguntasAbertas perguntas={"2- Qual sua idade?"} placeHolder={"Idade"} />
                <PerguntasAbertas perguntas={"3- Qual seu endereço de e-mail?"} placeHolder={"E-mail"} />
                <PerguntaFechada
                pergunta={"4- Qual sua escolaridade?"}
                opcoes={this.props.opcoes}
                valorSelecionado={this.props.valorSelecionado}
                capturarValorSelecionado={this.props.capturarValorSelecionado}
                />

            </Container>
        )
    }
}