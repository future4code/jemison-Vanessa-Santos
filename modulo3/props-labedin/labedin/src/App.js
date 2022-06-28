import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import emailLogo from './img/email_icon.png';
import addressLogo from './img/address_icon.png';
import profilePic from './img/vanessa.png';
import labenuLogo from './img/logoLabenu.png';
import logoFacul from './img/logoUniFatecie.png';
import logoInsta from './img/insta.png';
import logoLinkedin from './img/linkedim.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={profilePic}
          //imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Vanessa Mainara" 
          descricao="Oi, eu sou Vanessa Mainara. Sou aluna Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno imagem={emailLogo} item='Email:' conteudo='mainaravanessa@gmail.com' />

      <CardPequeno imagem={addressLogo} item='Endereço:' conteudo='Rua Labenu, 1000' />

      <div className="page-section-container">
        <h2>Formação Academicas</h2>
        <CardGrande 
          
          imagem={labenuLogo}
          nome="Labenu" 
          descricao="Desenvolvedor Web Full Stack" 
        />
        
        <CardGrande 
          imagem={logoFacul}
          nome="UniFatecie" 
          descricao="Análise e Desenvolvimento de Sistemas" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={logoLinkedin}
          texto="LinkedIn" 
        />        

        <ImagemButton 
          imagem={logoInsta} 
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;
