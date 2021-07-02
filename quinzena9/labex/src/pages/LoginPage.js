import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { Header } from '../components/Header'
import { useForms } from '../hooks/useForms'

export function LoginPage() {
    const history = useHistory()
    const [forms, onChange, cleanFields] = useForms({email: '', password: ''})

    const goToAdminHome = () => {
        history.replace('/admin/trips/list')
    }

    const login = async (e) => {
        e.preventDefault()

        try {
            const reposta = await axios.post(
                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvin-ferreira-munoz/login',
                forms,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            window.localStorage.setItem('token', reposta.data.token)
            goToAdminHome()
        } catch (e) {
            alert('usuário ou snenha inválidos')
            console.log(e)
        }
    } 

    return (
        <div>
            <Header />
            <h2>Login Page</h2>
            <form onSubmit={login}>
            <input 
            name={'email'}
            type={'email'} 
            placeholder={'E-mail'} 
            value={forms.email}
            onChange={onChange}
            required
            />

            <input 
            name={'password'} 
            type={'password'} 
            placeholder={'Senha'} 
            value={forms.password}
            onChange={onChange}
            required
            pattern={'^.{3,}'}
            title={'A senha deve possui pelo menos 3 caracteres'}
            />

            <button>Entrar</button>
            </form>
        </div>
    )
}