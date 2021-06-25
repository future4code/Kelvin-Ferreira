import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { Header } from '../components/Header'

export function ListTripsPage() {
    const [tripList, setTripList] = useState([])

    const history = useHistory()

    const getViagens = async () => {
        try {
            const response = await axios.get(
                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvin-ferreira-munoz/trips'
            )
            console.log(response.data.trips)
            setTripList(response.data.trips)
        } catch {

        }
    }

    useEffect(() => {
        getViagens()
    }, [])

    const goToApplicationForm = () => {
        history.push('/trips/application')
    }

    return (
        <div>
            <Header />
            <h2>Viagens</h2>
            {tripList.map((trip) => {
                return (
                    <div key={trip.id}>
                        <p>{trip.name}</p>
                    </div>
                )
            })}
            <button onClick={goToApplicationForm}>Candidate-se</button>

        </div>
    )
}