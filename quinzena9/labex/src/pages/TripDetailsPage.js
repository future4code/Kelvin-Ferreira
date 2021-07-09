import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { useTripRequest } from '../hooks/useTripRequest'
import { Candidates } from '../components/Candidates'
import { Approved } from '../components/Approved'
import { useValidation } from '../hooks/useValidation'
import DetailsBackground from '../visuals/DetailsBackground.png'
import DetailsTitle from '../visuals/DetailsTitle.png'

const DetailsContainer = styled.main`
    text-align: center;
    background-image: url(${DetailsBackground});
    background-size: cover;
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

export function TripDetailsPage() {
    const history = useHistory()
    const params = useParams()
    const header = {
        headers: {
            auth: window.localStorage.getItem("token")
        }
    }
    const tripDetails = useTripRequest(`trip/${params.id}`, header)

    useValidation()

    const goBack = () => {
        history.goBack()
    }

    const decideCandidate = (tripId, candidateId, approved) => {
        const body = {
            approve: approved
        }
        axios.put(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvin-ferreira-munoz/trips/${tripId}/candidates/${candidateId}/decide`,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    auth: window.localStorage.getItem("token")
                }
            }
        )
        .then(()=> {
            alert('Decisão feita com sucesso. Atualize a página para ver as mudanças.') 
        })
        .catch(() => {
            alert('Algo deu errado')
        })
    }

    return (
        <DetailsContainer>
            <Header />
            <img src={DetailsTitle} alt={'Título'} />
            {tripDetails !== undefined &&
            <div>
                <h2>Trip Details Page</h2>
                <p>Destino: {tripDetails.trip.planet}</p>
                <p>Data: {tripDetails.trip.date}</p>
                <p>Duração da viagem: {tripDetails.trip.durationInDays} dias</p>
                <p>Descrição: {tripDetails.trip.description}</p>
                <Candidates decideCandidate={decideCandidate} candidatesList={tripDetails.trip.candidates} tripId={tripDetails.trip.id} />
                <Approved approvedList={tripDetails.trip.approved}/>
            </div>}
            
            <Button onClick={goBack}>Voltar</Button>
        </DetailsContainer>
    )
}