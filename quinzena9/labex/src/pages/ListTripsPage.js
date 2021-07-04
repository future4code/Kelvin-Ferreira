import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Header } from '../components/Header'
import { useTripRequest } from '../hooks/useTripRequest'
import TripListBackground from '../visuals/TripListBackground.png'
import TripListTitle from '../visuals/TripListTitle.png'

const TripListContainer = styled.main`
    text-align: center;
    background-image: url(${TripListBackground});
    background-size: cover;
    height: 100%;
    background-attachment: fixed;
`

const TripBox = styled.div`
    border-bottom: 3px solid white;
    margin: 0 auto;
    width: 50vw;
    word-wrap: break-word; 
`
const Button = styled.button`
    background-color: #16091E;
    border: none;
    color: white;
    padding: 1vh 1vw;
    width: 12vw;
    margin: 1vh 1vw;
    font-family: 'Oswald', sans-serif;
    border-radius: 4px;
    font-size: large;

    &:hover {
        background-color: #08030B;
    }
`

export function ListTripsPage() {
    const history = useHistory()
    const tripList = useTripRequest('trips')

    const goToApplicationForm = () => {
        history.push(`/trips/application`)
    }

    return (
        <TripListContainer>
            <Header />
            <img src={TripListTitle} alt={'Título'}/>
            {tripList && tripList.trips.map((trip) => {
                return (
                    <TripBox key={trip.id}>
                        <p><strong>{trip.name}</strong></p>
                        <p><strong>Destino: </strong>{trip.planet}</p>
                        <p><strong>Data: </strong>{trip.date}</p>
                        <p><strong>Descrição: </strong>{trip.description}</p>
                    </TripBox>
                )
            })}

            <Button onClick={() => goToApplicationForm()}>Candidate-se</Button>
        </TripListContainer>
    )
}