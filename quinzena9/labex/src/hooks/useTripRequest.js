import { useState,useEffect } from 'react'
import axios from 'axios'

export const useTripRequest = (pathVariables, header) => {
    const [data, setData] = useState()
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvin-ferreira-munoz/${pathVariables}`

    const getTrips = () => {
        axios.get(
            url, header
        )
            .then((response) => {
                setData(response.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        getTrips()
    }, [])

    return data 
}