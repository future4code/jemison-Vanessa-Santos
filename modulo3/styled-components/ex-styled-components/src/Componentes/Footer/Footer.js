import React from 'react';
import styled from 'styled-components';



const Footer = styled.footer`
    width: 100vw;
    height: 5vh;
    background-color: #fff;
    
    `;


const TextFooter = styled.p`
   font-size: 0.8rem;
   text-align: center;
   margin: 0;
   padding: 1vh 0 1vh 0;
`;


export const AppFooter = (props) => {
    return (
        <Footer>
            <TextFooter>{props.footerText}</TextFooter>
        </Footer>
    )
} 