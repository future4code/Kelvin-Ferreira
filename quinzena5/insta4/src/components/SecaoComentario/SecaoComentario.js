import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 97%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	render() {
		const adicaoComentario = this.props.arrayComentariosProp.map((item, index) => {
			return <p key={index}>{item}</p>
		})
		return <CommentContainer>
			{adicaoComentario}
			<hr />
			<InputComentario
				placeholder={'Comentário'}
				onChange={this.props.handleComentario}
				value={this.props.comentarioEscrito}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
