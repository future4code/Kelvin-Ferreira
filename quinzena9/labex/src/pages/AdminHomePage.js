import React, { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { Header } from '../components/Header'
import { useTripRequest } from '../hooks/useTripRequest'


export function AdminHomePage() {
    const history = useHistory()
    const tripList = useTripRequest('trips')

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            console.log("Não está logado!!!")
            history.push("/login")
        }
    }, [])

    const goToTripDetails = (idViagem) => {
        history.push(`/admin/trip/${idViagem}`)
    }

    const goToCreateTrip = () => {
        history.push('/admin/trips/create')
    }

    const deleteTrip = (idViagem) => {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvin-ferreira-munoz/trips/${idViagem}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    auth: window.localStorage.getItem("token")
                }
            }
        )
            .then(() => {
                alert('Deletado com sucesso')
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <Header />
            <h2>Admin Page</h2>
            {tripList && tripList.trips.map((trip) => {
                return (
                    <div key={trip.id}>
                        <p>{trip.name}</p>
                        <button onClick={() => goToTripDetails(trip.id)}>Detalhes</button>
                        <button onClick={() => deleteTrip(trip.id)}>Deletar</button>
                    </div>
                )
            })}

            <button onClick={goToCreateTrip}>Criar nova viagem</button>


        </div>
    )
}