import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Gostei from '../img/Gostei.png'
import NaoGostei from '../img/NaoGostei.png'

const ContainerBotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`

const BotaoNaoGostou = styled.input`
    border-radius: 50%;
    border: none;
    width: 54px;
    
    &:hover {
        transform: scale(1.1,1.1);
    }

    &:active {
        transform: scale(1.2,1.2)
    }
`

const BotaoGostou = styled.input`
    border-radius: 50%;
    border-color: #f95f7c;
    border: none;
    width: 54px;

    &:hover {
        transform: scale(1.1,1.1);
    }

    &:active {
        transform: scale(1.2,1.2)
    }
`

export function Botoes(props) {
    const clicouGostou = async () => {
        const body = {
            id: props.pessoa.id,
            choice: true
        }

        try {
            await axios.post(
                `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelvin/choose-person`,
                body,
                {
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            )
            props.pegarPessoas()
        } catch {
            alert("Falha em dar Gostei")
        }
    }

    const clicouNaoGostou = async () => {
        const body = {
            id: props.pessoa.id,
            choice: false
        }

        try {
            await axios.post(
                `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person`,
                body,
                {
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            )
            props.pegarPessoas()
        } catch {
            alert("Falha em dar Gostei")
        }
    }
    return (
        <ContainerBotoes>
            <BotaoNaoGostou type='image' onClick={clicouNaoGostou} src={NaoGostei} alt='Não Gostei' />
            <BotaoGostou type='image' onClick={clicouGostou} src={Gostei} alt='Gostei'/>
        </ContainerBotoes>
    )
}
