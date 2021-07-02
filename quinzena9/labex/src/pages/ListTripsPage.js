import React from 'react'
import { useHistory } from 'react-router-dom'

import { Header } from '../components/Header'
import { useTripRequest } from '../hooks/useTripRequest'

export function ListTripsPage() {
    const history = useHistory() 
    const tripList = useTripRequest('trips')

    const goToApplicationForm = (idViagem) => {
        history.push(`/trips/application/${idViagem}`)
    }

    return (
        <div>
            <Header />
            <h2>Viagens</h2>
            {tripList && tripList.trips.map((trip) => {
                return (
                    <div key={trip.id}>
                        <p>{trip.name}</p>
                        <button onClick={() => goToApplicationForm(trip.id)}>Candidate-se</button>
                    </div>
                )
            })}


        </div>
    )
}