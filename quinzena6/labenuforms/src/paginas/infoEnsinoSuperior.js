import React from 'react';
import styled from 'styled-components'
import { PerguntasAbertas } from '../componentes/perguntasAbertas'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export class InfoEnsinoSuperior extends React.Component {
    render() {
        return (
            <Container>
                <h1>Informações do Ensino Superior</h1>
                <PerguntasAbertas perguntas={"5- Qual é o curso?"} placeHolder={"Curso"} />
                <PerguntasAbertas perguntas={"6- Qual a instituição de ensino?"} placeHolder={"Instituição de Ensino"} />
            </Container>
        )
    }
}