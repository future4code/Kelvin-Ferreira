import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`

const DivUtil = styled.div`
  display:flex;
  align-items: center;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

const ImagemIconeSalvar = styled.img`
  height: 30px;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    comentario: "",
		arrayComentarios: [],
    salvo: false
  }

  onChangeComentario = (e) => {
		this.setState({
			comentario: e.target.value,
		});
		console.log(e.target.value)
	}

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido
    })
    if(this.state.curtido === false) {
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
    } else {this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})}
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  salvarPost = () => {
    this.setState({ salvo: !this.state.salvo})
  }

  aoEnviarComentario = () => {
    const novoComentario = this.state.comentario
		const comentarios = [...this.state.arrayComentarios, novoComentario]
    this.setState({
      numeroComentarios: this.state.numeroComentarios + 1,
      arrayComentarios: comentarios,
      comentario: ""
    })
  }

  render() {
    let iconeSalvar

    if(this.state.salvo) {
      iconeSalvar = 'https://res.cloudinary.com/mykdesacloud/image/upload/v1620347885/iconeSalvo_hiajft.png'
    } else {
      iconeSalvar = 'https://res.cloudinary.com/mykdesacloud/image/upload/v1620347898/icone-nao-salvo_wdsidm.png'
    }

    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario 
      aoEnviar={this.aoEnviarComentario}
      handleComentario={this.onChangeComentario}
      comentarioEscrito={this.state.comentario}
      arrayComentariosProp={this.state.arrayComentarios}
      />
    }

    return <PostContainer>
      <PostHeader>
        <DivUtil>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        </DivUtil>
        <ImagemIconeSalvar src={iconeSalvar} alt={'ícone bookmark'} onClick={this.salvarPost}/>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post