import React from 'react'
import styled from 'styled-components'
import { Botoes } from './Botoes'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import logo from '../img/logo.jpeg'

import { Carregando } from './Carregando'

const ContainerCardPessoa = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 78vh;
    width: 20vw;
    background-color: white;
    padding:  3vw;
    border-radius: 12px;
    border: 1px solid black;  
    margin-right: 1vw;
`

const ContainerTopo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #ff1744;
    font-size: large;
`

const styleIconeMatches = {
    borderRadius: 3,
    border: 0,
    height: 28,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #0098da', 
    color: 'black',
};


const Logo = styled.img`
    width: auto;
    height: 48px;
`

const ContainerPessoa = styled.div`
    width: 340px;
    height: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 12px;
`

const FotoPessoa = styled.img`
    width: 100%;
    height: auto;
    max-height: 100%;
    position: absolute;
    margin: 0 auto;
    border-radius: 12px;
`

const FotoFundo = styled.img`
    width: 100%;
    height: 100%;
    max-height: 100%;
    position: absolute;
    margin: 0 auto;
    filter: blur(20px);
    border-radius: 12px;
`

const ContainerInfo = styled.div`
    z-index: 2;
    position: absolute;
    color: white;
    bottom: 0;
    font-size: large;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    width: 100%;
    border-radius: 12px;
`

const ContainerBotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`

export function CardPessoa(props) {
    const pessoa = props.pessoa

    return (
        <ContainerCardPessoa>
            <ContainerTopo>
                <Logo src={logo} alt='logo' />
                <QuestionAnswerIcon style={styleIconeMatches} onClick={props.funcao}/>
            </ContainerTopo>

            {props.carregando ? <Carregando /> :
            <ContainerPessoa>
                <FotoFundo src={pessoa.photo} alt="Foto de fundo" />
                <FotoPessoa src={pessoa.photo} alt='Foto da Pessoa' />
                <ContainerInfo>
                    <h3>{pessoa.name}, {pessoa.age}</h3>
                    <p>{pessoa.bio}</p>
                </ContainerInfo>
            </ContainerPessoa>}

            <ContainerBotoes>
                <Botoes
                    pessoa={pessoa}
                    pegarPessoas={props.pegarPessoas}
                />
            </ContainerBotoes>
        </ContainerCardPessoa>
    )
}