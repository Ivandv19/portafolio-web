// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
width: 100%;
height: auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 1 parte para la marca, 3 para la nav, 1 para el contacto */
  align-items: center;
  padding: 10px 20px;
  background-color: var(--color-primary); /* Negro */
  color: var(--color-text); /* Texto claro */
  border-bottom: 3px solid var( --color-accent);


`;

const Logo = styled.img`
  width: 80px;
  height: auto;
`;

const Marca = styled.h1`
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 10px;
    justify-content: center;
    width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const NavLink = styled.a`
  color: var(--color-text); /* Texto claro */
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;

  &:hover {
    color: var(--color-secondary); /* Rojo oscuro al pasar el mouse */
  }

  &:active {
    color: var(--color-accent);
  }
`;

const ContactLink = styled.a`
  color: var(--color-text);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
  display: flex;
  justify-content: center;

  &:hover {
    color: var(--color-secondary); /* Rojo oscuro al pasar el mouse */
  }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Marca>
                <Logo src="/public/img/logo.gif" alt="Logo de Portafolio" />
                <p>Mi Portafolio</p>
            </Marca>
            <Nav>
                <NavLink href="#sobre-mi">Sobre mí</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#hobbies">Hobbies</NavLink>
                <NavLink href="#formacion">Formación</NavLink>
                <NavLink href="#proyectos">Proyectos</NavLink>
            </Nav>
            <ContactLink href="#contacto">Contacto</ContactLink>
        </HeaderContainer>
    );
};

export default Header;