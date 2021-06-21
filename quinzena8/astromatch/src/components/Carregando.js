import React from 'react'
import styled from 'styled-components'

import IconeCarregando from '../img/IconeCarregando.png'

const ContainerCarregando = styled.div`
    height: 400px;
`
const Icone = styled.img`
    width: 60px;
    animation: 'carregamento' 3s ease infinite;

    @keyframes carregamento {
    from {transform: rotate(1deg);}
    to {transform: rotate(360deg);}
}
`
export function Carregando() {
    return (
        <ContainerCarregando>
            <Icone src={IconeCarregando} alt='Icone Carregamento'/>
        </ContainerCarregando>
    )
}