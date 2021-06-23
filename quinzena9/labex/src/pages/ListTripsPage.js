import React, { useState, useEffect} from 'react'
import axios from 'axios'

export function ListTripsPage() {
    const [listaViagens, setListaViagens] = useState([])

    const pegarViagens = async () => {
        try {
            const response = await axios.get(
                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvin-ferreira-munoz/trips'
            )
            console.log(response.data.trips)
            setListaViagens(response.data.trips)
        } catch {

        }
    }

    useEffect(() => {
        pegarViagens()
    }, [])

    return (
        <div>
            <h2>Viagens</h2>
            {listaViagens.map((viagem) => {
                return (
                    <div key={viagem.id}>
                        <p>{viagem.name}</p>
                    </div>
                )
            })}
        </div>
    )
}