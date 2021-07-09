import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Header } from '../components/Header'
import { useTripRequest } from '../hooks/useTripRequest'
import { useValidation } from '../hooks/useValidation'
import AdminHomeBackground from '../visuals/AdminHomeBackground.png'
import AdminHomeTitle from '../visuals/AdminHomeTitle.png'

const AdminTripList = styled.main`
    text-align: center;
    background-image: url(${AdminHomeBackground});
    background-size: cover;
    height: 100%;
    background-attachment: fixed;
`

const TripBox = styled.div`
    border-bottom: 3px solid white;
    padding-bottom: 1vh;
    margin: 0 auto;
    width: 50vw;
    word-wrap: break-word; 
`

const Button = styled.button`
    background-color: #16091E;
    border: none;
    color: white;
    padding: 1vh 1vw;
    width: 8vw;
    margin: 1vh 1vw;
    font-family: 'Oswald', sans-serif;
    border-radius: 4px;
    font-size: large;

    &:hover {
        background-color: #08030B;
    }
`

export function AdminHomePage() {
    const history = useHistory()
    const tripList = useTripRequest('trips')

    useValidation()

    const goToTripDetails = (tripId) => {
        history.push(`/admin/trip/${tripId}`)
    }

    const goToCreateTrip = () => {
        history.push('/admin/trips/create')
    }

    const deleteTrip = (tripId) => {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvin-ferreira-munoz/trips/${tripId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    auth: window.localStorage.getItem("token")
                }
            }
        )
            .then(() => {
                alert('Deletado com sucesso. Atualize a página para ver as mudanças.')
            })
            .catch(() => {
                alert("Erro ao deletar")
            })
    }

    return (
        <AdminTripList>
            <Header />
            <img src={AdminHomeTitle} alt={'Título'} />
            {tripList && tripList.trips.map((trip) => {
                return (
                    <TripBox key={trip.id}>
                        <p><strong>{trip.name}</strong></p>
                        <p><strong>Destino: </strong>{trip.planet}</p>
                        <p><strong>Data: </strong>{trip.date}</p>
                        <p><strong>Descrição: </strong>{trip.description}</p>
                        <Button onClick={() => goToTripDetails(trip.id)}>Detalhes</Button>
                        <Button onClick={() => deleteTrip(trip.id)}>Deletar</Button>
                    </TripBox>
                )
            })}

            <Button onClick={goToCreateTrip}>Criar nova viagem</Button>
        </AdminTripList>
    )
}