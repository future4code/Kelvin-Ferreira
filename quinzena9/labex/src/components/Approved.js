import React from 'react'

export const Approved = (props) => {
    return (
        <div>
            <h3>Aprovados</h3>
            {props.approvedList !== undefined && props.approvedList.map((candidate) => {
                return (
                    <div key={candidate.id}>
                        <p>{candidate.name}</p>
                    </div>
                )
            })}
        </div>
    )
}