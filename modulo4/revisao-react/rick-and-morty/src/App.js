

import Card from './components/Card/Card';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Homepage from './pages/HomePage/Homepage';
import {results} from './data/data'
import { useEffect, useState } from 'react';


function App() {

  const [characters, setCharacters] = useState ([])
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [species, setSpecies] = useState("")
  const [query, setQuery] = useState("")
  const [orderParam, setOrderParam] = useState("")
  const [page, setPage] = useState("homepage")
  const [id, setId] = useState(0)

  useEffect(()=>{
  setCharacters(results)
  }, [])

 const handleInputImage=(event) =>setImage(event.target.value)
 const handleInputName=(event) =>setName(event.target.value)
 const handleInputSpecies=(event) =>setSpecies(event.target.value)
 const handleInputQuery=(event) => setQuery(event.target.value)
 const handleInputOrderParam=(event) => setOrderParam(event.target.value)


 const changePage = (page, id)=> {
  setPage(page) 
  setId(id)
}

  const addCharacter=(event)=>{
    event.preventDefault()
  
    const newCharacter={
      id: Date.now(),
      name,
      species,
      origin: {
      name: "Earth"
      },
      image
    }

    const newCharacterList=[...characters, newCharacter]
    setCharacters(newCharacterList)

    setImage("")
    setName("")
    setSpecies("")
  
  }

  const removeCharacter = (id) =>{
    const filterdList = characters.filter(char =>{
     return char.id !== id
    })
    setCharacters(filterdList)
  }

  const renderPage= ()=>{
    switch(page) {
      case 'homepage':
        return <Homepage characters={characters} 
        states={{image,name, species, query, orderParam}} 
        handlers={{handleInputImage, handleInputName, handleInputQuery, handleInputSpecies, handleInputOrderParam}} 
        addCharacter={addCharacter}
        removeCharacter={removeCharacter}
        changePage={changePage}
        />
      case 'detailpage' :
        return<DetailsPage
        characters={characters}
        id={id}
        changePage={changePage}
        />  

    }
  }
  
  return (
    <div className="App">
      <GlobalStyle/>
     {renderPage()}
      
    

    
    </div>
  );
}

export default App;
