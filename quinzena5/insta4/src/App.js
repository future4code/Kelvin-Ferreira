import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Kanye West'}
          fotoUsuario={'https://picsum.photos/50/70'}
          fotoPost={'https://picsum.photos/200/170'}
        />
        <Post
          nomeUsuario={'Tyler, the Creator'}
          fotoUsuario={'https://picsum.photos/50/60'}
          fotoPost={'https://picsum.photos/200/160'}
        />
      </MainContainer>
    );
  }
}

export default App;
