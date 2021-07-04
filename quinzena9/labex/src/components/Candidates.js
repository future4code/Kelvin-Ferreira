import React from 'react'
import styled from 'styled-components'

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

export const Candidates = (props) => {
    const finalList = [...props.candidatesList]
    return (
        <div>
            <h3>Candidatos</h3>
            {finalList.map((candidate) => {
                return (
                    <div key={candidate.id}>
                        <p>{candidate.name}</p>
                        <Button onClick={() => props.decideCandidate(props.tripId, candidate.id, true)}>Aprovar candidatura</Button>
                        <Button onClick={() => props.decideCandidate(props.tripId, candidate.id, false)}>Reprovar candidatura</Button>
                    </div>
                )
            })}
        </div>
    )
}