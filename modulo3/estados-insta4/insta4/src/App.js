import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import vanessamainara from './img/vanessamainara.png';
import Vane from './img/Vane.png';
import fotoPerfil from './img/fotoPerfil.jpg';
import fotoPost from './img/fotoPost.jpg';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
const informacoes= [
  
           
            {nomeUsuario:'paulinha',
            fotoUsuario:'https://picsum.photos/50/50',
            fotoPost:'https://picsum.photos/200/150'},
        
           
            {nomeUsuario:'Vanessa Mainara',
            fotoUsuario:Vane,
            fotoPost:vanessamainara},
          
            {nomeUsuario:'MA. Studio',
            fotoUsuario:fotoPerfil,
            fotoPost:fotoPost}
]
const informacoesPost = informacoes.map((pessoa, index) =>{
  return (    
        
<Post key={index}
     nomeUsuario= {pessoa.nomeUsuario}
      fotoUsuario= {pessoa.fotoUsuario}
      fotoPost= {pessoa.fotoPost}
    />
  )
})
console.log(informacoesPost)


return(
  <MainContainer>
          {informacoesPost}
        </MainContainer>
)

}




export default App;