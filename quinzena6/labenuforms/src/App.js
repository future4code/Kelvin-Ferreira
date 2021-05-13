import React from 'react'
import styled from 'styled-components'
import { DadosGerais } from './paginas/dadosGerais'
import { InfoEnsinoSuperior } from './paginas/infoEnsinoSuperior'
import { SemEnsinoSuperior } from './paginas/infoSemEnsinoSuperior'
import { MensagemFinal } from './paginas/MensagemFinal'

const MainContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    etapa: 1,
    escolaridadeSelecionada: ""
  }
  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais opcoes={[
          "Ensino médio incompleto",
          "Ensino médio completo",
          "Ensino superior incompleto",
          "Ensino superior completo"]}
          valorSelecionado={this.state.escolaridadeSelecionada}
          capturarValorSelecionado={(e) => { this.setState({ escolaridadeSelecionada: e.target.value }) }}
        />
      case 2:
        return <InfoEnsinoSuperior />
      case 3:
        return <SemEnsinoSuperior />
      case 4:
        return <MensagemFinal />
      default:
        break;
    }
  }

  determinarProximaEtapa = () => {
    if (this.state.escolaridadeSelecionada === "Ensino superior completo" ||
      this.state.escolaridadeSelecionada === "Ensino superior incompleto") {
      this.setState({ etapa: this.state.etapa + 1 })
    } else { this.setState({ etapa: this.state.etapa + 2 }) }
    
    if (this.state.etapa === 2) {
      this.setState({ etapa: this.state.etapa + 2})
    } else if (this.state.etapa === 3) {
      this.setState({ etapa: this.state.etapa + 1})
    }
  }

  render() {
    return (
      <MainContainer>
        {this.renderizarEtapa()}
        {this.state.etapa !== 4 ? <button onClick={this.determinarProximaEtapa}>Próxima Etapa</button> : ""}
      </MainContainer>
    );
  }
}

export default App;
