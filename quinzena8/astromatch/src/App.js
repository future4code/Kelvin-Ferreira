import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Button from '@material-ui/core/Button';
import ImagemFundo from './img/ImagemFundo.jpeg'

import { CardPessoa } from './components/CardPessoa'
import { Matches } from './components/Matches'

const MainContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ImagemFundo});
`
const DivDoBotao = styled.div`
  position: fixed;
  bottom: 1vh;
  right: 1vw;
`

function App() {
  const [pessoa, setPessoa] = useState({})
  const [carregando, setCarregando] = useState(true)
  const [listaMatches, setListaMatches] = useState(false)

  const pegarPessoas = async () => {
    try {
      const resposta = await axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelvin/person'
      )
      if(resposta.data.profile) {
        setCarregando(false)
        setPessoa(resposta.data.profile)
      } else {
        setCarregando(true)
      }
    } catch {
      alert("Falha em carregar pessoa")
    }
  }

  const resetar = async () => {
    try {
      axios.put(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kelvin/clear',
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      pegarPessoas()
    } catch {
      alert('Nao foi possível resetar, tente novamente')
    }
  }

  const mostrarMatches = () => {
    setListaMatches(!listaMatches)
  }

  useEffect(() => {
    pegarPessoas()
  }, [])

  return (
    <MainContainer>
      <GlobalStyle />
      <CardPessoa
        pessoa={pessoa}
        pegarPessoas={pegarPessoas}
        carregando={carregando}
        funcao={mostrarMatches}
      />

       {listaMatches ? <Matches 
      pessoa={pessoa} 
      /> : ''}

      <DivDoBotao>
        <Button variant='outlined' onClick={resetar}>Resetar</Button>
      </DivDoBotao> 
    </MainContainer>
  );
}

export default App;
