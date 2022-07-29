import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonAdd, ButtonDelete, Display, Form, ListaUsuario } from "../styled";

function Usuarios() {
    
    const [user, setUser] = useState([]);
  
    const [inputNome, setInputNome] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    
    const handleInputNome = (e) => {
        setInputNome(e.target.value)
    }
    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }

    
    const allUsers = user.map((user, index) => {
        return (
            <ListaUsuario key={index}>
                {user.name}
            </ListaUsuario>
        )
    })

    
    useEffect(() => {
        getAllUsers()
    }, [])


   
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceHeaders = {
        headers: {
            Authorization: 'vanessa-mainara'
        }
    }

   
    const getAllUsers = () => {
        axios.get(url, serviceHeaders)
        .then((response) => { setUser(response.data) })
        .catch((error) => { console.log(error.response) })
    }

    
    const body = {
        "name": inputNome,
        "email": inputEmail
    }

    const createUser = (e) => {
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
        .then((response) => {
            alert("Usuário cadastrado!")
            getAllUsers()
        }).catch((error) => {
            alert("Tente novamente :")
        })

        setInputNome("")
        setInputEmail("")
    }

    
    const deleteUser = (e) => {
        e.preventDefault();

        const delUser = user.filter((user) => user.name === inputNome)

        axios.delete(url + "/" + delUser[0].id, serviceHeaders)
        .then((response) => {
            alert("Deletado com sucesso!")
            getAllUsers();
        }).catch((error) => {
            alert("Algo deu errado. Tente novamente!")
        })

        setInputNome("")
    }

    return (
        <Display>
            {}
            <div>
                <p>{allUsers}</p>
            </div>

            {}
            <Form>
                <input type="text" value={inputNome} placeholder="Insira o nome:" onChange={handleInputNome} />
                <input type="text" value={inputEmail} placeholder ="Insina o e-mail:" onChange={handleInputEmail} />
                <ButtonAdd onClick={createUser}>
                    Adicionar
                </ButtonAdd>
                <ButtonDelete onClick={deleteUser}>
                    Excluir
                </ButtonDelete>
            </Form>
        </Display>
    )
}

export default Usuarios; 