import React from 'react'
import styled from 'styled-components'

const CampoInputs = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5vh;
    align-items: center;
`
const Input = styled.input`
    padding-top: 2vh;
    padding-bottom: 2vh;
    width: 24vw;
    margin: 1vh auto;
    border-radius: 8px;
    border: none;
    text-align: center;
`
const BotaoAdd = styled.button`
    background-color: #04c5c6;
    border: none;
    padding: 1vh 3vw;
    border-radius: 8px;
    color: white;
    font-size: x-large;
`
export class AddNovaFaixa extends React.Component {
    render() {
        return (
            <CampoInputs>
                <Input type='text' placeholder='Nome da música' value={this.props.musica} onChange={this.props.controleInputMusica} />
                <Input type='text' placeholder='Artista' value={this.props.artista} onChange={this.props.controleInputArtista} />
                <Input type='text' title="Vá até o vídeo no youtube, clique em COMPARTILHAR, copie o link e cole aqui." placeholder='Link de Compartilhamento do vídeo no Youtube' value={this.props.link} onChange={this.props.controleInputLink} />
                <BotaoAdd onClick={this.props.addNovaFaixa}>Adicionar</BotaoAdd>
            </CampoInputs>
        )
    }
}