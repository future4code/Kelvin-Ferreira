import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useForms } from '../hooks/useForms'
import { Header } from '../components/Header'
import LoginBackground from '../visuals/LoginBackground.png'
import LoginTitle from '../visuals/LoginTitle.png'

const LoginContainer = styled.main`
    text-align: center;
    background-image: url(${LoginBackground});
    background-size: cover;
    height: 100vh;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 32vw;
    height: 40vh;
    margin: 0 auto;
    align-items: center;
`

const Button = styled.button`
    background-color: #16091E;
    border: none;
    color: white;
    padding: 1vh 1vw;
    width: 8vw;
    margin: 1vh 1vw;
    font-family: 'Oswald', sans-serif;
    border-radius: 4px;
    font-size: large;

    &:hover {
        background-color: #08030B;
    }
`
const Input = styled.input`
    width: 100%;
    padding: 1vh 2vw;
    border-radius: 12px;
    background-color: #863B59;
    border: none;
    margin: 1vh 0;
`

export function LoginPage() {
    const history = useHistory()
    const [forms, onChange, cleanFields] = useForms({ email: '', password: '' })

    const goToAdminHome = () => {
        history.replace('/admin/trips/list')
    }

    const login = (e) => {
        e.preventDefault()

        axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvin-ferreira-munoz/login',
            forms,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then((response) => {
            window.localStorage.setItem('token', response.data.token)
            goToAdminHome()
            cleanFields()
        })
        .catch(() => {
            alert('usuário ou senha inválidos')
        })
    }

    return (
        <LoginContainer>
            <Header />
            <img src={LoginTitle} alt={'Título'} />
            <Form onSubmit={login}>
                <Input name={'email'} type={'email'} placeholder={'E-mail'} value={forms.email} onChange={onChange} required />
                <Input name={'password'} type={'password'} placeholder={'Senha'} value={forms.password} onChange={onChange} pattern={'^.{3,}'} title={'A senha deve possui pelo menos 3 caracteres'} required />
                <Button>Entrar</Button>
            </Form>
        </LoginContainer>
    )
}