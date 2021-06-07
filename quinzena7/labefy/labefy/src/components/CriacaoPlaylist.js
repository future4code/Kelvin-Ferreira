import React from 'react'
import styled from 'styled-components'
import imagemBonita from '../img/imagemBonita.png'

const ContainerCriacao = styled.div`
    font-size: xx-large;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 78vh;
`
const BotaoCriar = styled.button`
    background-color: #04c5c6;
    border: none;
    padding: 2vh 4vw;
    border-radius: 8px;
    color: white;
    font-size: x-large;
`
const InputNome = styled.input`
    padding: 2vh 4vw;
    margin-bottom: 1vh;
    border-radius: 8px;
    border: none;
    font-size: x-large;
    text-align: center;
    transition: 2s;
`

const ImagemCentral = styled.img`
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: 1s;
    position: absolute;

    &:hover {
        opacity: 0.3;
    }
`   
const SecaoCriacao = styled.div`
    text-align: center;
    position:relative;
    padding: 0 2%;
    height: 100%;
    width: 40%;
    background-image: linear-gradient(to bottom right, #04c5c6, #132235);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin: 0 auto;
    transition: smooth;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: 1.5s;
    opacity: 0.8;

    &:hover {
        opacity: 1;
        background-image: linear-gradient(to top right, #132235, #04c5c6);
    }
`

const Text = styled.h2`
    position: absolute;
    bottom: 2vh;
    display: none;
    text-align: center;
    margin: 0 8vw 8vh 8vw;

    &:hover {
        display: block;
    }

    &:hover ${ImagemCentral}{
        opacity: 0.3;
    }
`

const Util = styled.div`
    height: 100%;
    width: 60%;
    position: relative;

    &:hover ${Text}{
        display: block;
    }
`


export class CriacaoPlaylist extends React.Component {
    render() {
        return (
            <ContainerCriacao>
                <SecaoCriacao>
                    <h2>Criar Playlist</h2>
                    <InputNome type='text' placeholder='Nome da Playlist' value={this.props.nomePlaylist} onChange={this.props.controleInputNome} />
                    <BotaoCriar onClick={this.props.criarPlaylist}>Criar Playlist</BotaoCriar>
                </SecaoCriacao>
                <Util>
                <ImagemCentral src={imagemBonita}/>
                <Text>Bem vido ao Labefy! Curtir suas músicas favoritas ficou muito mais fácil!</Text>
                </Util>
            </ContainerCriacao>
        )
    }
}