import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: #ecf0f1; /* Color de texto */
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) { // Cambia a móviles
    padding-bottom: 50px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-weight: 600;
`;

const FooterCopyright = styled.small`
  display: block;
  margin-top: 5px;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const Marca = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  gap: 10px;
  justify-content: space-evenly;
  width: 100%;

`;


const Footer = () => {
    return (
        <FooterContainer>
            <Marca>
                <FooterText>Desarrollado por Ivan Cruz</FooterText>
                <Logo src="/img/logo.gif" alt="Logo de Portafolio" />
            </Marca>
            <FooterCopyright>© 2024 Todos los derechos reservados.</FooterCopyright>
        </FooterContainer>
    );
}

export default Footer;