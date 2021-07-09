import { useState } from 'react'

export const useForms = (initialState) => {
    const [forms, setForms] = useState(initialState)
    
    const onChange = (e) => {
        const { name, value} = e.target 

        setForms({ ...forms, [name]: value })
    }

    const cleanFields = () => {
        setForms(initialState)
    }

    return [ forms, onChange, cleanFields]
}
