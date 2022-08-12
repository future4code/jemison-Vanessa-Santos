import styled from "styled-components"




export const ContainerCentral = styled.div `
    margin: 5% auto 0;
    box-shadow: 0 4px 8px #000;
    width: 400px;
    background-image: url(https://images.unsplash.com/photo-1659713196212-2a989c450c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
    border-radius: 20px;
    padding: 10px;
`

//  CSS  CardPessoa ---///

export const ContainerImg = styled.div `
    margin: 50px auto 0;
    width: 80%;
    height: 50vh;
    box-shadow: 10px 3px 5px #000;
    position: relative;
    border-radius: 10px;
`
export const ImgBackGround = styled.img `
    /* background-image: url( ${ (props) => props.pegarImg });  */
    background: linear-gradient( 20deg, #000 23% , transparent 35%),url(${(props) => props.pegarImg}) ;
   
    background-size: cover;
    height: 100%;
    width: 100%;
    filter: blur(2px);
    z-index: -1;
    border-radius: 10px;
`
export const ImgProfile = styled.img `
    width: 100%;
    height: 70%;
    border: none;
    object-fit: cover;
    border-radius: 7px;
    margin-top: 20px;
   
    filter: opacity(100%);
    position: absolute;
    left: 0;
`
export const TextProfile = styled.div `
    position: absolute;
    color: #f3f3f3;
    //#f3f3f3
    z-index: 2;
    bottom: 5%;
    font-weight: bold;
    margin-left: 10px;
    p {
        line-height: 0.2;
        font-size: 19px;
    }
    span { 
        font-size: 15px;
    }
`



///   ContainerBotao ///// 
export const DivBotao = styled.div `
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    box-sizing: border-box;
    background-color: #444;
`

export const Botao = styled.button `
    
`


export const MatchContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    
    background-color: #444;
`//#444
export const MatchPerfil = styled.div `
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 2px 3px #000000;
    border-radius: 10px;
    
    margin:5px 0;
    padding:10px 20px;
    background-color: #fff;
    font-weight: bold;
` 
export const MatchPhoto = styled.img `
    height: 100%;
    width: 60px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 2px 3px #000;
`
export const MatchInfo = styled.p `
    
`
export const Header = styled.div `
    display: flex;
    height: 60px;
    background-color: #fff;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 0 2px;
    box-shadow: 1px 2px 3px #444;
    border-radius: 6px 6px 0;
    h2{ 
        margin-left: 22%;
        span:nth-child(1) {
            color: #8B3A62;
        }//#66cc66
        span:nth-child(2) {
        color: #00CDCD;
        }
    }
    button {
        height: 100%;
        width: 50px;
        border: none;
        border-radius: 10px 0 10px;
        :hover{
                box-shadow: 1px 2px 3px #800080;
            }
        img {
            height: 100%;
            width: 100%;
            background: transparent;
        }
        
    }
`

export const TelaCarregamento = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
` 