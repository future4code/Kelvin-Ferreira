import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://res.cloudinary.com/mykdesacloud/image/upload/v1619743236/minhaFoto_kfy2tq.jpg"
          nome="Kelvin de Sá Ferreira"
          descricao="Atualmente estou fazendo o curso de desenvolvimento web Front-End com React da Labenu, o término do curso está previsto para agosto, mas já aprendi muito sobre HTML, CSS e Javascript, e utilizo diariamente o Git dentro do curso, então estou familiarizado com o básico, agora estou passando já para o React."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://res.cloudinary.com/mykdesacloud/image/upload/v1619748067/email_yepk23.png"
          titulo="Email:"
          conteudo="kelvin-sa@live.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://res.cloudinary.com/mykdesacloud/image/upload/v1619748125/localizacao_ocq0k0.png"
          titulo="Endereço:"
          conteudo="Camp Flog Gnaw"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
