import React from 'react'
import styled from 'styled-components'

const Faixa = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 5vh auto;
`
const InfoFaixas = styled.div`
    width: 50%;
    margin: 0 auto;
    padding-left: 2vw;
`
const Video = styled.div`
    width: 50%;
    margin: 0 auto;
    padding-left: 2vw;
`

export class ListaDeFaixas extends React.Component {
    render() {
        const link = this.props.link

        const extrairId = link.slice(17, link.length)

        console.log(extrairId)
        return (
            <Faixa>
                <Video>
                    <iframe width="450" height="250" src={`https://www.youtube.com/embed/${extrairId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Video>

                <InfoFaixas>
                    <h4><strong>{this.props.nomeMusica}</strong> - <br />{this.props.nomeArtista} </h4>
                </InfoFaixas>
            </Faixa>
        )
    }
}