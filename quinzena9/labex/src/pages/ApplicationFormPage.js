import React from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

import { Header } from '../components/Header'
import { useForms } from '../hooks/useForms'

export function ApplicationFormPage() {
    const history = useHistory()
    const params = useParams()
    const [forms, onChange, cleanFields] = useForms({
        name: "",
        age: 0,
        applicationText: "",
        profession: "",
        country: ""
    })

    const goBack = () => {
        history.goBack()
    }

    console.log(forms)
    const userApplication = (e) => {
        e.preventDefault()

        axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvin-ferreira-munoz/trips/${params}/apply`,
            forms,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            alert('candidtaou-se com sucesso')
            cleanFields()
        }).catch((error) => {
            console.log(error.response)
        })
    }

    return (
        <div>
            <Header />
            <h2>Applicatiob Form Page</h2>
            <form onSubmit={userApplication}>
                <input name={'name'} type={'text'} placeholder={'nome Completo'} value={forms.name} onChange={onChange} />
                <input name={'age'} type={'number'} placeholder={'Idade'} value={forms.age} onChange={onChange} />
                <input name={'applicationText'} type={'text'} placeholder={'Texto de Aplicação'} value={forms.applicationText} onChange={onChange} />
                <input name={'profession'} type={'text'} placeholder={'Profissão'} value={forms.profession} onChange={onChange} />
                <input name={'country'} type={'text'} placeholder={'País'} value={forms.country} onChange={onChange} />
                <button>Candidatar-se</button>
            </form>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}