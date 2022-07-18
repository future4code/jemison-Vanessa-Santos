import React, {useState} from "react";
import {DivPai, InputMensagem, Balao ,Section, MainInput} from './styleM'

export function Main () {

    const [inputMensagem, setInputMensagem] = useState ("")
    const [inputUsuario, setInputUsuario] = useState ("")
    const [usuario, setUsuario] = useState ([{nome:"Vanessa", mensagem:"Ola, Como posso ajudar?"}])

    function handleInputUsuario (e){
        setInputUsuario(e.target.value)
    }
    function handleInputMensagem (e){
        setInputMensagem(e.target.value)
    }

    const addUsuario = (e) => {
        e.preventDefault()

        setUsuario ([...usuario, {nome:inputUsuario, mensagem:inputMensagem}])
        setInputMensagem("")
        setInputUsuario("")
    }

    const mensagensMapeada = usuario.map((pessoa, index) => {
        return(
            <Balao key={index}>
                <p>{pessoa.nome}</p>
                <p>{pessoa.mensagem}</p>
            </Balao>
        )
    })


    return (
        <DivPai>
            <Section>
                <div>
                    {mensagensMapeada}
                </div>
                <MainInput>

                    <label/>
                        <input 
                        placeholder="Qual seu nome?" size={15}
                        value = {inputUsuario}
                        onChange = {handleInputUsuario}
                        /> 
                    <label/>

                    <InputMensagem>
                    <input 
                        placeholder="Digite sua mensagem" size={20}
                        value = {inputMensagem}
                        onChange = {handleInputMensagem}
                    />
                    </InputMensagem> 
                    <button onClick={addUsuario}>Enviar</button>
                </MainInput>

            </Section>
        </DivPai>
    );
  }
