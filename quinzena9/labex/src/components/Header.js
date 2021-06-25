import React from 'react'
import { useHistory } from 'react-router-dom'

export function Header() {
    const history = useHistory()

    const goToPage = (path) => {
        history.push(path)
    }

    return (
        <header>
        <h1>Labex</h1>

        <button onClick={() => goToPage('/')}>Home</button>
        <button onClick={() => goToPage('/trips/list')}>Viagens</button>
        <button onClick={() => goToPage('/trips/application')}>Área Administrativa</button>
        <button onClick={() => goToPage('/login')}>Login Administrativo</button>
        <button onClick={() => goToPage('/admin/trips/list')}>Lista administrativa</button>
        <button onClick={() => goToPage('/admin/trips/create')}>Criar Nova Viagem</button>
 
        </header>
    )
}