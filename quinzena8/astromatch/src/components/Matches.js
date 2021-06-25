import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { CadaMatch } from './CadaMatch'

const ContainerMatches = styled.section`
    overflow: auto;
    max-height: 78vh;
`

const Titulo = styled.h3`
    text-align: center;
    color: white;
`

export function Matches(props) {
    const [matches, setMatches] = useState([])

    const pegarMatches = async () => {
        try {
            const resposta = await axios.get(
                'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelvin/matches'
            )
            setMatches(resposta.data.matches)
        } catch { 
            alert("Falha em carregar Matches")
        }
    }

    useEffect(() => {
        pegarMatches()
    }, [props.pessoa])

    return (
        <ContainerMatches>
            <Titulo>Matches</Titulo>
            <CadaMatch matches={matches} />
        </ContainerMatches>
    )
}