import foto from './img/vanessa.png'
import './App.css';

function App() {

//  variáveis do Javascript
  const titulo = 'Olá, me chamo Vanessa Mainara !!!'
  const enviarMensagem =()=>{
    alert('Prontos para resolve-los!')
  }
  

  return (
    
    <div className="principal">
      
      <h1>{titulo}</h1>
      <img src={foto} className='vanessa.png' alt='Logo da  Labenu laranja com cinza'/>
      <h2>Meu primeiro projeto em React !!!</h2>
      
      <button onClick={enviarMensagem}>Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema</button>
      <br></br><br></br><br></br>
    <footer>Desenvolvido por Vanessa Mainara!</footer>

    </div>
  );
}

export default App;
