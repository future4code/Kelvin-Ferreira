import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { Header } from '../components/Header'
import { useForms } from '../hooks/useForms'

export function CreateTripPage() {
    const history = useHistory()
    const [forms, onChange, cleanFields] = useForms({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: 0
    })

    const goBack = () => {
        history.goBack()
    }

    const createTrip = (e) => {
        e.preventDefault()
        axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvin-ferreira-munoz/trips',
            forms,
            {
                headers: {
                    'Content-Type': 'application/json',
                    auth: window.localStorage.getItem("token")
                }
            }
        ).then(() => {
            cleanFields()
            alert('Criou')
        }) .catch((e) => {
            console.log(e.response)
        })
    }

    return (
        <div>
            <Header />
            <h2>Create Trip Page</h2>
            <form onSubmit={createTrip}>
                <input name={'name'} type={'text'} placeholder={'Nome da viagem'} value={forms.name} onChange={onChange} />
                <input name={'planet'} type={'text'} placeholder={'Planeta destino'} value={forms.planet} onChange={onChange} />
                <input name={'date'} type={'text'} placeholder={'Data'} value={forms.date} onChange={onChange} />
                <input name={'description'} type={'text'} placeholder={'Descrição'} value={forms.description} onChange={onChange} />
                <input name={'durationInDays'} type={'number'} placeholder={'Duração (dias)'} value={forms.durationInDays} onChange={onChange} />
                <button>Criar</button>
            </form>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}