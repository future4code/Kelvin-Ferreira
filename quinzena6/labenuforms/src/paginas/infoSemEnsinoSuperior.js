import React from 'react';
import styled from 'styled-components'
import {PerguntasAbertas} from '../componentes/perguntasAbertas'
import {PerguntaFechada} from '../componentes/perguntaFechada'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export class SemEnsinoSuperior extends React.Component {
    render() {
        return (
            <Container>
                <h1>Informações gerais de Ensino</h1>
                <PerguntasAbertas perguntas={"5- Por que você não terminou um curso de graduação?"} placeHolder={"Descreva em poucas palavaras"} />
                <PerguntaFechada 
                pergunta={"6- Você fez algum curso complementar?"}
                opcoes={[
                    "Curso técnico",
                    "Curso de inglês"
                ]}
                />
            </Container>
        )
    }
}