import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { Header } from '../components/Header'
import { useTripRequest } from '../hooks/useTripRequest'

export function TripDetailsPage() {
    const history = useHistory()
    const params = useParams()
    const header = {
        headers: {
            auth: window.localStorage.getItem("token")
        }
    }
    const tripDetails = useTripRequest(`trip/${params.id}`, header)

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <Header />
            {tripDetails !== undefined &&
            <div>
                <h2>Trip Details Page</h2>
                <p>Destino: {tripDetails.trip.planet}</p>
                <p>Data: {tripDetails.trip.date}</p>
                <p>Duração da viagem: {tripDetails.trip.durationInDays} dias</p>
                <p>Descrição: {tripDetails.trip.description}</p>
                <p>{tripDetails.trip.candidates[2].name}</p>
            </div>}
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}