import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Header } from '../components/Header'
import HomePageBackground from '../visuals/HomePageBackground.mp4'

const HomeContainer = styled.section`
    width: 100vw;
    height: 100vh;
    display:flex;
`

const BackgroundVideo = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100vw;
    min-height: 100vh;
    z-index: -1;
`

const ButtonBox = styled.div`
    width: 32vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 36%;
`

const Button = styled.button`
    background-color: #16091E;
    border: none;
    color: white;
    padding: 3vh 3vw;
    width: 16vw;
    margin: 1vh 1vw;
    font-family: 'Oswald', sans-serif;
    border-radius: 4px;
    font-size: large;

    &:hover {
        background-color: #08030B;
    }
`

export function HomePage() {
    const history = useHistory()

    const goToLogin = () => {
        history.push('/login')
    }

    const goToTripList = () => {
        history.push('/trips/list')
    }
    
    return (
        <HomeContainer>
            <BackgroundVideo autoPlay muted loop>
                <source src={HomePageBackground} type={'video/mp4'} />
            </BackgroundVideo>
            <Header />
            <ButtonBox>
                <Button onClick={goToLogin}>Área Administrativa</Button>
                <Button onClick={goToTripList}>Lista de Viagens</Button>
            </ButtonBox>
        </HomeContainer>
    )
}