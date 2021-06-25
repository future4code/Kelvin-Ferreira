import React from 'react'
import { useHistory } from 'react-router-dom'

import { Header } from '../components/Header'

export function CreateTripPage() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <Header />
            <h2>Create Trip Page</h2>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}