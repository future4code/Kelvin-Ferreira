import React from 'react'
import { useHistory } from 'react-router-dom'

import { Header } from '../components/Header'

export function AdminHomePage() {
    const history = useHistory()
    

    const goToTripDetails = () => {
        history.push('/admin/trips/:id')
    }

    return (
        <div>
            <Header />
            <h2>Admin Page</h2>
            <button onClick={goToTripDetails}>Detalhes</button>
            
        </div>
    )
}