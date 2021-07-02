import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Header } from '../components/Header'
import { useTripRequest } from '../hooks/useTripRequest'

export function TripDetailsPage() {
    const history = useHistory()
    const location = useLocation()
    const idViagem = location.pathname.slice(12, location.pathname.length)
    const header = {
        headers: {
            auth: window.localStorage.getItem("token")
        }
    }
    const tripDetails = useTripRequest(`trip/${idViagem}`, header)

    const goBack = () => {
        history.goBack()
    }
  
    return (
        <div>
            <Header />
            {tripDetails &&
            <div>
                <h2>Trip Details Page</h2>
                <p>Destino: {tripDetails.trip.planet}</p>
                <p>Data: {tripDetails.trip.date}</p>
                <p>Duração da viagem: {tripDetails.trip.durationInDays} dias</p>
                <p>Descrição: {tripDetails.trip.description}</p>
            </div>}
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}