import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContainerCentral,Header, TelaCarregamento} from "../style";
import iconeMatch from "../imagens/seguir.png"

import { CardPessoa } from "./CardPessoa";
import { ContainerBotao } from "./ContainerBotao";
import { ContainerMatch } from "./ContainerMatch";


const Container = () => {

  
  const [personProfile, setPersonProfile] = useState([]) 
  const [pegarImg, setPegarImg] = useState([])

  
  const [match, setMatch] = useState([])

  
  const url="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vanessa-mainara";
  const [id, setId]  = useState([])
  const body = {
    "id": id,
    "choice": true
  }

  
  const [atualizarCardPessoa, setAtualizarCartPessoa] = useState(0)
  const getProfileToChoose = () => {
    axios
      .get(url + "/person")
      .then( (response) => {
        setPersonProfile([ response.data.profile])
        const photoProfile = {photo: response.data.profile.photo,
          photo_alt: response.data.profile.photo_alt
        }
        setPegarImg(photoProfile)
        setId(response.data.profile.id)
        console.log(response)
      })
      .catch( (error) => {
        console.log("algo deu errado")
        console.log(error)
      } )
  }
  useEffect( () => getProfileToChoose(), [atualizarCardPessoa])

  const choosePerson = () => {    
    axios
      .post(url + "/choose-person",body)
      .then( (response) => {
        console.log(response)
      })
      .catch( (error) => {
        console.log("Algo deu errado no choosePerson")
        console.log(error)
      })

    setAtualizarCartPessoa(atualizarCardPessoa+1)
    console.log(atualizarCardPessoa)
  }

  
  const [altarerTela, setAlterarTela] =useState(0)

  
  const getMathes = () => {
    const newMatches = [...match]
    axios
      .get(url + "/matches")
      .then( (response) => {
        console.log(response.data.matches)
        setMatch(response.data.matches)
      })
      .catch( (error) => {
        console.log("deu erro no Get Matches")
        console.log(error)
      })
    setMatch(newMatches)
    setAlterarTela(1)
  }
  const voltarTela = () => {
    setAlterarTela(0)
  } 

  const qauntidade = match.length
  
  const telaInicial =
    <>
      <Header>
        <button onClick={getMathes}> <img src={iconeMatch}/> </button>
        <h2> <span>Astro</span><span>match</span> </h2>
      </Header>
      {personProfile.length > 0 ? 
      <CardPessoa
        personProfile={personProfile}
        pegarImg={pegarImg}
      />  
      : 
      <TelaCarregamento>
        <h1>Carregando</h1>
      </TelaCarregamento>
      }
      <p>{qauntidade}</p>
      <ContainerBotao
        choosePerson={choosePerson}
      />
    </>
  ;
 
  const telaDeMatch = 
    <>
      <ContainerMatch
        match={match}

        voltarTela={voltarTela}
      />
    </>
  ;
 

  return (
    <ContainerCentral>
      {altarerTela === 0 ? telaInicial : telaDeMatch}
    </ContainerCentral>
  )
}

export default Container 