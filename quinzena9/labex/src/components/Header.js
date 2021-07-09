import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Logo from '../visuals/Logo.png'

const HeaderContainer = styled.header`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const ButtonBox = styled.div`
    display: flex;
`

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    width: inherit;
    z-index: 1;
`

const DropDown = styled.div`
    position: relative;

    &:hover ${DropDownContent} {
        display:block;
    }
`

const Button = styled.button`
    background-color: #16091E;
    border: none;
    color: white;
    padding: 1vh 1vw;
    width: 12vw;
    margin: 0 1vw;
    font-family: 'Oswald', sans-serif;
    border-radius: 4px;
    font-size: large;

    &:hover {
        background-color: #08030B;
    }
`

export function Header() {
    const history = useHistory()

    const goToPage = (path) => {
        history.push(path)
    }

    return (
        <HeaderContainer>
            <img src={Logo} alt={"Logo"} />

            <ButtonBox>
                <Button onClick={() => goToPage('/')}>Página Inicial</Button>
                <DropDown>
                    <Button onClick={() => goToPage('/trips/list')}>Lista de Viagens</Button>
                    <DropDownContent>
                        <Button onClick={() => goToPage('/trips/application')}>Candidate-se</Button>
                    </DropDownContent>
                </DropDown>

                <DropDown>
                    <Button onClick={() => goToPage('/login')}>Área Administrativa</Button>
                    <DropDownContent>
                        <Button onClick={() => goToPage('/login')}>Login Administrativo</Button>
                        <Button onClick={() => goToPage('/admin/trips/list')}>Lista administrativa</Button>
                        <Button onClick={() => goToPage('/admin/trips/create')}>Criar Nova Viagem</Button>
                    </DropDownContent>
                </DropDown>
            </ButtonBox>

        </HeaderContainer>
    )
}