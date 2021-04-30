import React from 'react';
import styled from 'styled-components'

const SmallCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
`
const SmallCardContainerImagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const SmallCardContainerTitulo = styled.h4`
    margin-right: 3px;
`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <SmallCardContainerImagem src={props.imagem}/>
            <SmallCardContainerTitulo>{props.titulo}</SmallCardContainerTitulo>
            <p>{props.conteudo}</p>
        </SmallCardContainer>
    )
}

export default CardPequeno
