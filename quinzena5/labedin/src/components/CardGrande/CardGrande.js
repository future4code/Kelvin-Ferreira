import React from 'react';
import styled from 'styled-components';

const BigCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const BigCardContainerImagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const BigCardContainerTitulo = styled.h4 `
    margin-bottom: 15px;
`

const BigCardContainerDiv =  styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigCardContainer>
            <BigCardContainerImagem src={ props.imagem } />
            <BigCardContainerDiv>
                <BigCardContainerTitulo>{ props.nome }</BigCardContainerTitulo>
                <p>{ props.descricao }</p>
            </BigCardContainerDiv>
        </BigCardContainer>
    )
}

export default CardGrande;