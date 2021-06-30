import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Header } from '../components/Header'

export function LoginPage() {
    const [inputEmail, setInputEmail] = useState("")
    const [inputSenha, setInputSenha] = useState("")
    const history = useHistory()

    const onChangeEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const onChangeSenha = (e) => {
        setInputSenha(e.target.value)
    }

    const goToAdminHome = () => {
        history.replace('/admin/trips/list')
    }

    const login = async () => {
        const body = {
            email: inputEmail,
            password: inputSenha
        }

        try {
            const reposta = await axios.post(
                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvin-ferreira-munoz/login',
                body,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            console.log('login bem sucedido')
            goToAdminHome()
        } catch (e) {
            alert('usuário ou snenha inválidos')
        }
    } 

    return (
        <div>
            <Header />
            <h2>Login Page</h2>
            <input 
            type={'text'} 
            placeholder={'E-mail'} 
            value={inputEmail}
            onChange={onChangeEmail}
            />

            <input 
            type={'password'} 
            placeholder={'Senha'} 
            value={inputSenha}
            onChange={onChangeSenha}
            />

            <button onClick={login}>Entrar</button>
        </div>
    )
}