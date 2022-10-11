import { useState } from 'react';
import Card from '../../components/Card/Card';
import {Header} from '../../components/Header/Header'
import { HomePageContainer } from './style';



function Homepage(props){

    const {characters}= props
    const {image, name, species, query,orderParam} = props.states
    const {handleInputImage, handleInputName, handleInputSpecies, handlesInputQuery, handleInputOrderParam}= props.handlers
    const {addCharacters} = props
    const {removeCharacter}= props
    const {changePage} = props

   
    const renderlist= characters
    .filter(char => query === "" || char.name.toLowerCase().includes(query))
    .sort((a,b)=> orderParam === "" || orderParam === "asc" && a.name> b.name ? 1: -1)
    .sort((a,b)=> orderParam === "" || orderParam === "desc" && a.name> b.name ? -1: 1)
    .map(char=>{

        return(
            <Card key={char.id}
                id={char.id}
                img={char.image}
                name={char.name}
                species={char.species}
                removeCharacter={removeCharacter}
                changePage={changePage}
                 />

        )
    })
    

    return (
        <>
        <Header/>
    <HomePageContainer>
            

        <aside>
            <form>
                <label htmlFor="image">Image:</label>
                <input 
                type="text" 
                id='image'
                onChange={handleInputImage}
                value={image}
                ></input>

                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                id='name'
                onChange={handleInputName}
                value={name}
                ></input>

                <label htmlFor="species">Espécie:</label>
                <input 
                type="text" 
                id='species'
                onChange={handleInputSpecies}
                value={species}
                ></input>

                    <button onClick={addCharacters}>Criar</button>



            <h2>Busca</h2>
            <input type="text" value={query} onChange={handlesInputQuery}></input>   

            <h2>Ordenação</h2>
              <select name="" id="" value={orderParam} onChange={handleInputOrderParam}>
              <option value="asc">Crescente</option>          
              <option value="desc">Decrescente</option>     
              </select>      
            </form>
        </aside>
        
        <main>
            {renderlist}
            
        </main>
            
    </HomePageContainer>
    </>
    )
}

export default Homepage;