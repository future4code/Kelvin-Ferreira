import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Header } from '../components/Header'
import { useForms } from '../hooks/useForms'
import { useValidation } from '../hooks/useValidation'
import CreateTripBackground from '../visuals/CreateTripBackground.png'
import CreateTripTitle from '../visuals/CreateTripTitle.png'


const CreateTripContainer = styled.main`
    text-align: center;
    background-image: url(${CreateTripBackground});
    background-size: cover;
    height: 100vh;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 32vw;
    height: 40vh;
    margin: 0 auto;
    align-items:center;
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
    background-color: #3C213A;
    border: none;
    margin: 1vh 0;
`

const Select = styled.select`
    width: 112%;
    padding: 1vh 2vw;
    border-radius: 12px;
    background-color: #3C213A;
    border: none;
    margin: 1vh 0;
`

export function CreateTripPage() {
    const history = useHistory()
    const [forms, onChange, cleanFields] = useForms({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: 0
    })

    useValidation()

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
            alert('Criou com sucesso!')

        }).catch(() => {
            alert('Algo deu errado ao criar.')
        })
    }

    return (
        <CreateTripContainer>
            <Header />
            <img src={CreateTripTitle} alt={'Título'} />
            <Form onSubmit={createTrip}>
                <Input name={'name'} type={'text'} placeholder={'Nome da viagem'} value={forms.name} onChange={onChange} />

                <Select name={'planet'} value={forms.planet} onChange={onChange}>
                    <option value={'Mercúrio'}>Mercúrio</option>
                    <option value={'Vênus'}>Vênus</option>
                    <option value={'Marte'}>Marte</option>
                    <option value={'Júpiter'}>Júpiter</option>
                    <option value={'Saturno'}>Saturno</option>
                    <option value={'Urano'}>Urano</option>
                    <option value={'Netuno'}>Netuno</option>
                </Select>

                <Input name={'date'} type={'text'} placeholder={'Data'} value={forms.date} onChange={onChange} />
                <Input name={'description'} type={'text'} placeholder={'Descrição'} value={forms.description} onChange={onChange} />
                <Input name={'durationInDays'} type={'number'} placeholder={'Duração (dias)'} value={forms.durationInDays} onChange={onChange} />
                <Button>Criar</Button>
            </Form>
            <Button onClick={goBack}>Voltar</Button>
        </CreateTripContainer>
    )
}