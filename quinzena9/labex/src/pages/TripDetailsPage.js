import React from 'react'
import { useHistory } from 'react-router-dom'

import { Header } from '../components/Header'

export function TripDetailsPage() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <Header />
            <h2>Trip Details Page</h2>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}